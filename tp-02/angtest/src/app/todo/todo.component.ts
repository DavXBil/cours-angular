import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos$ = new BehaviorSubject<Todo[]>([]);

  constructor(
    private todoService: TodoService
  ) {}

  ngOnInit() {
    this.todos$ = this.todoService.todos$;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const todo = new Todo(form.value.message);
      this.todoService.add(todo);
      form.reset();
    }
  }

  onEdit(todo: Todo) {
    todo.editingMode = !todo.editingMode;
    if (todo.editingMode) {
      this.todoService.update(todo);
    }
  }

  onDelete(id: number) {
    this.todoService.delete(id);
  }

}