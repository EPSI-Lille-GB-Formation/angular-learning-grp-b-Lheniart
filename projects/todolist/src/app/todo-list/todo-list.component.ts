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

      <a href="#" role="button" (click)="onClickTodo()">A faire</a>
      <a href="#" role="button" (click)="onClickTodoCompleted()">Terminée</a>
      <a href="#" role="button" (click)="onClickTodoShowAll()">Affciher tout</a>
      <ng-container *ngFor="let todo of todoList">
          <app-todo [value]="todo" [listTodo]="todoList" *ngIf="(todo.isCompleted == completedFiler) || (showAll)"></app-todo>
      </ng-container>
  `,
  styles: [

  ],
})
export class TodoListComponent {
  todoList  = TODOS
  completedFiler = false;
  showAll = false
  constructor(){
    console.table(this.todoList);
  }
  onClickTodo(){
    this.completedFiler = false;
  }
  onClickTodoCompleted(){
    this.completedFiler = true;
  }
  onClickTodoShowAll(){
    this.showAll = !this.showAll
  }
}
