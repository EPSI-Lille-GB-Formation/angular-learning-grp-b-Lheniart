import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BorderHighlightDirective} from "../border-highlight.directive";
import {CommonModule} from "@angular/common";
import {Todo} from "../todo";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {TodoService} from "../todo.service";
import {RetourDirective} from "../retour.directive";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    BorderHighlightDirective,
    RetourDirective,
    CommonModule,
    FormsModule
  ],
  template: `
    <article border-highlight>
      <div class="grid">
        <label for="todo-{{todo.id}}">
          <input type="checkbox" id="todo-{{todo.id}}" name="todo-{{todo.id}}" [(ngModel)]="todo.isCompleted">
          {{todo.title}}
        </label>
        <div class="action">
          <a redirect redirect-url="task/{{todo.id}}">Edit</a>
          <a (click)="deleteTodo($event)">Delete</a>
        </div>
      </div>
    </article>
  `,
  styles: [
    `
      .action {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
      }
    `
  ]
})
export class TodoComponent {

  constructor(private router: Router, private todoService: TodoService) {
  }
  @Output()
  deleteTodoEvent = new EventEmitter<string>();

  @Input("value")
  todo!: Todo

  checkboxValue!: boolean

  @Input("listTodo")
  todoList!: Todo[]

  editTodo(event: Event){
    event.preventDefault();
    this.router.navigateByUrl(`/task/${this.todo.id}`).then(r => console.log(r))
  }

  deleteTodo(event: Event) {
    event.preventDefault()
    this.todoService.deleteTodo(this.todo.id).subscribe(todo =>console.log(todo))
    this.deleteTodoEvent.emit()
  }
}
