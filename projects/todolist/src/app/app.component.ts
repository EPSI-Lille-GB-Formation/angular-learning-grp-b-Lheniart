import {Component} from '@angular/core';
import {TodoListComponent} from "./todo-list/todo-list.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoListComponent, TodoListComponent, RouterOutlet],
  template: `
    <div class="container">
      <router-outlet></router-outlet>
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
