import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  public lastId: number = 0;
  public todos: Todo[] = [];

  constructor() { }

  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  // deleteTodoById(id: number): TodoDataService {
  //   const toDelete = confirm(`Are you sure you want to delete ${this.todos[id].title}`);
  //   if (toDelete) {
  //       this.todos.splice(id, 1);
  //   }
  //   return this;
  // }

  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // getTodoById(id: number): Todo {
  //     for (const todo of this.todos) {
  //       if (todo.id === id) {
  //           return todo;
  //       }
  // }

  // updateTodoById(id: number, values: Object = {}): Todo {
  //   const todo = this.getTodoById(id);
  //   if (!todo) {
  //     return null;
  //   }
  //   Object.assign(todo, values);
  //   return todo;
  // }

  getAllTodos(): Todo[] {
    return this.todos;
  }
}
