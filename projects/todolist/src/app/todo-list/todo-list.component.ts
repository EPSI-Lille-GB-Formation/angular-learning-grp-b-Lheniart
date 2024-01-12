import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {BorderHighlightDirective} from "../border-highlight.directive";
import {TODOS} from "../mock-todo";
import {TodoComponent} from "../todo/todo.component";
import {TodoService} from "../todo.service";
import {Todo} from "../todo";

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BorderHighlightDirective, TodoComponent],
  template: `
      <h1>Liste de chose à faire</h1>

      <a href="#" role="button" (click)="onClickTodo()" [class.secondary]="!completedFiler && !showAll">A faire</a>
      <a href="#" role="button" (click)="onClickTodoCompleted()" [class.secondary]="completedFiler && !showAll">Terminée</a>
      <a href="#" role="button" (click)="onClickTodoShowAll()" [class.secondary]="showAll">Afficher tout</a>
      <ng-container *ngFor="let todo of todoList">
          <app-todo [value]="todo" [listTodo]="todoList" *ngIf="(todo.isCompleted === completedFiler) || (showAll)"></app-todo>
      </ng-container>
  `,
  styles: [

  ],
})
export class TodoListComponent {
  todoList: Todo[] = []
  completedFiler: boolean = false;
  showAll: boolean = false
  constructor(private todoService: TodoService){}

  ngOnInit(): void{
    this.todoService.getTodoList().subscribe(todos => this.todoList = todos)
  }
  onClickTodo(): void{
    this.completedFiler = false;
    this.showAll = false;
  }
  onClickTodoCompleted(): void{
    this.completedFiler = true;
    this.showAll = false;
  }
  onClickTodoShowAll(): void{
    this.showAll = !this.showAll;
  }
}
