import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {BorderHighlightDirective} from "../border-highlight.directive";
import {TODOS} from "../mock-todo";
import {Todo} from "../todo";
import {TodoComponent} from "../todo/todo.component";

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BorderHighlightDirective, TodoComponent],
  template: `
      <h1>Liste de chose à faire</h1>

      <a href="#" role="button">A faire</a>
      <a href="#" role="button">Terminée</a>
      <ng-container *ngFor="let todo of todoList">
          <app-todo [value]="todo"></app-todo>
      </ng-container>
  `,
  styles: [

  ],
})
export class TodoListComponent {
  todoList  = TODOS
  constructor(){
    console.table(this.todoList);
  }
  selectTodo(id: number):Todo {
    return this.todoList[id]
  }
}
