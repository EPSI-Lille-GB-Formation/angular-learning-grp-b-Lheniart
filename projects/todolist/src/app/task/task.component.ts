import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Todo} from "../todo";
import {TodoService} from "../todo.service";
import {FormsModule} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {RetourDirective} from "../retour.directive";


@Component({
  selector: 'task',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe,
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
      <a href="#" redirect redirect-url="">Retour</a>

    </form>
  `,
  styles : []
})
export class TaskComponent {
  id = 5;
  constructor(private route: ActivatedRoute, private router: Router, private todoService: TodoService) { }




  todo : Todo = {
    content: "",
    completedAt: null,
    title: "",
    author: "",
    createdAt: new Date(),
    isCompleted: false,
    id: -1
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.todoService.getTodoById(this.id).subscribe(todo =>{
      this.todo = todo
      console.log(this.todo)
    })
  }

  submitForm() {
    // Handle form submission logic here
    this.todoService.updateTodo(this.todo).subscribe(todo =>console.log(todo))
  }





}
