import {Component} from '@angular/core';
import {TodoListComponent} from "./todo-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoListComponent],
  template: `
    <div class="container">
      <app-todo></app-todo>
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
