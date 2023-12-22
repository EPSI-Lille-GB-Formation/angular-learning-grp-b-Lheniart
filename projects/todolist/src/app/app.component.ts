import {Component} from '@angular/core';
import {TodoListComponent} from "./todo-list/todo-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoListComponent, TodoListComponent],
  template: `
    <div class="container">
      <todo-list></todo-list>
    </div>

  `,
  styles: [`

    :root {
      --primary: #f4511e;
    }
  `],
})
export class AppComponent {
}
