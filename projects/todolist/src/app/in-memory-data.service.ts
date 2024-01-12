import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {TODOS} from "./mock-todo";
import {Todo} from "./todo";


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb() {
    const todos = TODOS
    return {todos}
  }

  getById(id: number): Todo {
    return TODOS.find(todo => todo.id === id)!
  }

}
