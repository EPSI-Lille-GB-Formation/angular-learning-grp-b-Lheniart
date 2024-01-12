import { Injectable } from '@angular/core';
import {Todo} from "./todo";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl : string = "api/todos"
  constructor(
    private http: HttpClient
  ) { }

  getTodoList(): Observable<Todo[]>  {

    return this.http.get<Todo[]>(this.todosUrl).pipe(
      tap(todoList => console.log(todoList)),
      catchError(error => {
        console.log(error);
        return of([])
      })
    )
  }

  getTodoById(id : number): Observable<Todo>{
    return this.http.get<Todo>(`${this.todosUrl}/${id}`).pipe(
      catchError(error => {
        console.log(error)
        return of()
      })
    )
  }

  createTodo(todo: Todo){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',  // Remplacez cela par le type de contenu que vous envoyez
    });
    return this.http.post(this.todosUrl, todo, { headers }).pipe(
      tap(response => console.log(response)),
      catchError(error =>{
        console.log(error)
        return of()
      })
    )
  }

  updateTodo(todo : Todo): Observable<Object>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',  // Remplacez cela par le type de contenu que vous envoyez
    });
    return this.http.put(this.todosUrl, todo, { headers }).pipe(
      catchError(error =>{
        console.log(error);
        return of()
      })
    )
  }

  deleteTodo(id: number){
    return this.http.delete(`${this.todosUrl}/${id}`).pipe(
      tap(response => console.log(response)),
      catchError(error =>{
        console.log(error);
        return of()
      })
    )
  }

}
