import {Injectable} from '@angular/core';
import {InMemoryDbService, STATUS} from "angular-in-memory-web-api";
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


}
