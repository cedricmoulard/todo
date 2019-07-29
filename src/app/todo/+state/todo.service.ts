import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TodoInterface } from '../todo.interface';

const KEY = 'todoList';
const initialTodoList = [
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
];

/**
 * Service de gestion des tâches
 * Simule des appels http vers des api externes
 */
@Injectable()
export class TodoService {

  /**
   * Retourne la listes complète des tâches
   */
  getAll(): Observable<TodoInterface.Todo[]> {
    const todoList = this.getTodoListFromStorage();
    return of(todoList);
  }

  /**
   * Ajoute une nouvelle tâche
   * @param name nom de la tâche
   */
  add(name: string): Observable<TodoInterface.Todo> {
    const todoList = this.getTodoListFromStorage();

    const id = `${ todoList.length + 1 }`;

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

  /**
   * Mets à jour une tâche
   * @param id identifiant de la tâche
   * @param data données partielles à mettre à jour
   */
  update(id: string, data: Partial<TodoInterface.Todo>): Observable<TodoInterface.Todo> {

    const todoList = this.getTodoListFromStorage();
    const todoToBeUpdated = todoList.find(todoInList => todoInList.id === id);

    this.saveTodoListToStorage([
      ...todoList.filter(todoInList => todoInList.id !== id),
      {
        ...todoToBeUpdated,
        ...data,
        id
      }
    ]);

    return of({
      ...todoToBeUpdated,
      ...data,
      id
    });
  }

  /**
   * Lis les données dans le local storage
   */
  private getTodoListFromStorage() {

    if (!sessionStorage.getItem(KEY)) {
      this.saveTodoListToStorage(initialTodoList);
    }

    return JSON.parse(sessionStorage.getItem(KEY)) as TodoInterface.Todo[];
  }

  /**
   * Ecrit les données dans le local storage
   * @param todoList liste des tâches à sauvegarder
   */
  private saveTodoListToStorage(todoList: TodoInterface.Todo[]) {
    sessionStorage.setItem(KEY, JSON.stringify(todoList));
  }


}
