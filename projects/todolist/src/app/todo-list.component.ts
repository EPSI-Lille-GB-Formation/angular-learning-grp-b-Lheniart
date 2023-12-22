import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {TODOS} from "./mock-todo";
import {Todo} from "./todo";
import {BorderHighlightDirective} from "./border-highlight.directive";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BorderHighlightDirective],
  template: `
      <h1>Liste de chose à faire</h1>
      <ng-container *ngFor="let todo of todoList">
          <article *ngIf="!todo.isCompleted" border-highlight>
              <div class="grid">
                  <label for="todo-{{todo.id}}">
                      <input type="checkbox" id="todo-{{todo.id}}" name="terms">
                      {{todo.title}}
                  </label>
                  <div class="action">
                      <a href="#">Edit</a>
                      <a href="#">Delete</a>
                  </div>
              </div>
          </article>
      </ng-container>
  `,
  styles: [
    `
        .action{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-end;
          & a{
            margin: 0 8px;
          }
        }
    `
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
