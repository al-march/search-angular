import { Injectable } from '@angular/core';
import { Todo } from "./todo";
import { TODOS } from "./todoMock";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos() {
    return TODOS.sort((a, b) => a.id - b.id)
  }
  unshiftTodo(todo:Todo) {
    TODOS.unshift(todo);
    console.log(TODOS);
    
  }
}
