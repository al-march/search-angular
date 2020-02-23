import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTodoComponent } from './add-todo/add-todo.component';

import { TodoService } from './todo.service'
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'todo-app';
  todos: Todo[];

  constructor(public dialog: MatDialog, private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos() {
    this.todos = this.todoService.getTodos()
  }

  toggleTodo(id) {
    const index = this.todos.findIndex(todo => todo.id === id);
    this.todos[index].is_complete = !this.todos[index].is_complete;
  }
  deleteTodo(id) {
    const index = this.todos.findIndex(todo => todo.id === id);
    this.todos.splice(index, 1)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddTodoComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
