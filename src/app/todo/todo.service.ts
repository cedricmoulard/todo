import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {TodoInterface} from "./todo.interface";

const KEY = 'todoList';

@Injectable()
export class TodoService {


  constructor() {
    if (!sessionStorage.getItem(KEY)) {
      this.saveTodoListToStorage([
        {
          id: '1',
          name: 'Ecrire les tests',
          completed: false
        },
        {
          id: '2',
          name: 'Ecrire le code',
          completed: false
        },
        {
          id: '3',
          name: 'Faire la PR',
          completed: false
        }
      ]);
    }
  }

  getAll(): Observable<TodoInterface.Todo[]> {
    const todoList = this.getTodoListFromStorage();
    return of(todoList);
  }

  private getTodoListFromStorage() {
    return JSON.parse(sessionStorage.getItem(KEY)) as TodoInterface.Todo[];
  }

  private saveTodoListToStorage(todoList: TodoInterface.Todo[]) {
    sessionStorage.setItem(KEY, JSON.stringify(todoList));
  }

  add(name: string): Observable<TodoInterface.Todo> {
    const todoList = this.getTodoListFromStorage();

    const id = `${todoList.length + 1}`;

    const newTodo: TodoInterface.Todo = {
      id,
      name,
      completed: false
    };

    this.saveTodoListToStorage([
      ...todoList,
      newTodo
    ]);

    return of(newTodo);
  }

  save(todo: TodoInterface.Todo): Observable<TodoInterface.Todo> {

    const todoList = this.getTodoListFromStorage();

    this.saveTodoListToStorage( [
      ...todoList.filter(todoInList => todoInList.id !== todo.id),
      todo
    ]);

    return of(todo);
  }


}
