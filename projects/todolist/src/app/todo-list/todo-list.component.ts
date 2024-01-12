import {Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterOutlet} from '@angular/router';
import {BorderHighlightDirective} from "../border-highlight.directive";
import {TODOS} from "../mock-todo";
import {TodoComponent} from "../todo/todo.component";
import {TodoService} from "../todo.service";
import {Todo} from "../todo";
import {RetourDirective} from "../retour.directive";

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BorderHighlightDirective, TodoComponent, RetourDirective],
  template: `
    <div class="grid">
      <h1>Liste de chose à faire</h1>

    </div>


      <a href="#" role="button" (click)="onClickTodo()" [class.secondary]="!completedFiler && !showAll">A faire</a>
      <a href="#" role="button" (click)="onClickTodoCompleted()" [class.secondary]="completedFiler && !showAll">Terminée</a>
      <a href="#" role="button" (click)="onClickTodoShowAll()" [class.secondary]="showAll">Afficher tout</a>
      <a href="#" role="button" (click)="createTodo($event)" >Créer</a>

      <ng-container *ngFor="let todo of todoList">
          <app-todo [value]="todo" [listTodo]="todoList" *ngIf="(todo.isCompleted === completedFiler) || (showAll)" (deleteTodoEvent)="onDelete()"></app-todo>
      </ng-container>
  `,
  styles: [

  ],
})
export class TodoListComponent {
  todoList: Todo[] = []
  completedFiler: boolean = false;
  showAll: boolean = false
  createTodo(event:Event){
    event.preventDefault()
    this.router.navigateByUrl("create").then((r: any) => console.log(r))

  }

  constructor(private todoService: TodoService, private router: Router){}

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
  onDelete(){
    this.todoService.getTodoList().subscribe(todos => this.todoList = todos)
  }
}
