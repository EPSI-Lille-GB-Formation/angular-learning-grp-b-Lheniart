import {Component, Input} from '@angular/core';
import {BorderHighlightDirective} from "../border-highlight.directive";
import {CommonModule} from "@angular/common";
import {Todo} from "../todo";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    BorderHighlightDirective,
    CommonModule
  ],
  template: `
    <article border-highlight>
      <div class="grid">
        <label for="todo-{{todo.id}}">
          <input type="checkbox" id="todo-{{todo.id}}" name="todo-{{todo.id}}">
          {{todo.title}}
        </label>
        <div class="action">
          <a href="#">Edit</a>
          <a href="#">Delete</a>
        </div>
      </div>
    </article>
  `,
  styles:[
    `
        .action{
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
}
