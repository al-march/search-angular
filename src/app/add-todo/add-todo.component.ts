import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { TodoService } from '../todo.service'
import { Todo } from '../todo';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.sass']
})
export class AddTodoComponent implements OnInit {

  todos: Todo[];

  constructor(
    public dialogRef: MatDialogRef<AddTodoComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private todoService: TodoService) { }

  ngOnInit(): void {    
    this.getTodos()
  }

  getTodos() {
    this.todos = this.todoService.getTodos()
  }

  close() {
    this.dialogRef.close()
  }
  save(text, tags) {
    const { length } = this.todos;
    const Tags:string[] = tags.length > 0 ? [...tags.split(' ')] : []
    const newTodo:Todo = {
      "id": length + 1,
      "text": text,
      "created_at": new Date().toISOString(),
      "Tags": Tags,
      "is_complete": false
    }
    this.todoService.unshiftTodo(newTodo)
    this.dialogRef.close()
  }
}
