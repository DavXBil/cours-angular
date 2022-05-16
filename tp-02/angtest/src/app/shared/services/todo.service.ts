import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Todo } from "../models/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todos$ = new BehaviorSubject<Todo[]>(
    [
      new Todo("Faire la vaisselle"),
      new Todo("Faire le ménage"),
      new Todo("Faire les courses"),
    ]
  );

  public add(newTodo: Todo) {
    this.todos$.next([newTodo, ...this.todos$.value])
  }

  public update(updated: Todo) {
    const todo = this.todos$.value.find(t => t.id === updated.id)
  }

  public delete(id: number) {
    const todos = this.todos$.value.filter(t => t.id !== id)
    this.todos$.next(todos)
  }

  constructor() {}
}