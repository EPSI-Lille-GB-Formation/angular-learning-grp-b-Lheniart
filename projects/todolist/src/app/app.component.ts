import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {TODOS} from "./mock-todo";
import {Todo} from "./todo";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="container">
      <h1>Liste de chose à faire</h1>
      <ul>
        <li *ngFor="let todo of IncomleteTodos">
            {{todo.title}}
        </li>
      </ul>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  todoList  = TODOS
  constructor(){
    console.table(this.todoList);
  }
  selectTodo(id: number):Todo {
    return this.todoList[id]
  }
  get IncomleteTodos() {
    return this.todoList.filter(todo => !todo.isCompleted);
  }
}
