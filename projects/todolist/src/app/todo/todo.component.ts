import {Component, Input} from '@angular/core';
import {BorderHighlightDirective} from "../border-highlight.directive";
import {CommonModule} from "@angular/common";
import {Todo} from "../todo";
import {FormsModule} from "@angular/forms";
import {TODOS} from "../mock-todo";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    BorderHighlightDirective,
    CommonModule,
    FormsModule
  ],
  template: `
    <article border-highlight>
      <div class="grid">
        <label for="todo-{{todo.id}}">
          <input type="checkbox" id="todo-{{todo.id}}" name="todo-{{todo.id}}" [(ngModel)]="checkboxValue">
          {{todo.title}}
        </label>
        <div class="action">
          <a href="#" (click)="editTodo()">Edit</a>
          <a href="#" (click)="deleteTodo()">Delete</a>
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

  @Input("value")
  todo!: Todo
  checkboxValue!: boolean

  ngAfterViewInit() {
    setTimeout(() => {
      this.checkboxValue = this.todo.isCompleted;
    });
  }

  editTodo() {
    this.todo.isCompleted = this.checkboxValue;
  }

  deleteTodo() {
    console.log("supprime")
  }
}
