import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {TodoService} from "../todo.service";
import {Todo} from "../todo";
import {Router} from "@angular/router";
import {RetourDirective} from "../retour.directive";

@Component({
  selector: 'task-create',
  standalone: true,
  imports: [
    FormsModule,
    RetourDirective
  ],
  template: `
    <form (ngSubmit)="submitForm()">

      <!-- Grid -->


        <!-- Markup example 1: input is inside label -->
        <label for="authorInput">Author:</label>
        <input type="text" id="authorInput" name="authorInput" [(ngModel)]="todo.author" required>

        <label for="contentInput">Content:</label>
        <textarea id="contentInput" name="contentInput" [(ngModel)]="todo.content" required></textarea>

        <label for="titleInput">Title:</label>
        <input type="text" id="titleInput" name="titleInput" [(ngModel)]="todo.title" required>

        <label for="titleInput">Is Completed:</label>
        <input type="checkbox" id="isCompletedInput" name="isCompletedInput" [(ngModel)]="todo.isCompleted" required>




      <!-- Markup example 2: input is after label -->
      <button type="submit">Submit</button>

    </form>
    <a href="#" redirect redirect-url="">Retour</a>
  `,
  styles: []
})
export class TaskCreateComponent {
  todo : Todo = {
    content: "",
    completedAt: null,
    title: "",
    author: "",
    createdAt: new Date(),
    isCompleted: false,
    id: -1
  }
  constructor(private todoService: TodoService, private router: Router) {
  }
  submitForm() {
    // Handle form submission logic here
    console.log('Form submitted:', this.todo);
    console.log(this.todo)
    this.todo.createdAt = new Date()
    this.todoService.createTodo(this.todo).subscribe(todo =>console.log(todo))
  }
}
