import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoInterface } from '../todo.interface';
import { HttpClient } from '@angular/common/http';


/**
 * Service de gestion des tâches
 * Simule des appels http vers des api externes
 */
@Injectable()
export class TodoService {

  constructor(@Inject(HttpClient) private readonly  http: HttpClient) {
  }

  /**
   * Retourne la listes complète des tâches
   */
  getAll(): Observable<TodoInterface.Todo[]> {

    return this.http.get<TodoInterface.Todo[]>('http://localhost:3000/todo');

  }

  /**
   * Ajoute une nouvelle tâche
   * @param name nom de la tâche
   */
  add(name: string): Observable<TodoInterface.Todo> {

    return this.http.post<TodoInterface.Todo>('http://localhost:3000/todo', {name, complete: false});

  }

  /**
   * Mets à jour une tâche
   * @param todoToBeUpdate tâche à mettre à jour
   */
  update(todoToBeUpdate: TodoInterface.Todo): Observable<TodoInterface.Todo> {

    return this.http.put<TodoInterface.Todo>(`http://localhost:3000/todo/${ todoToBeUpdate.id }`, todoToBeUpdate);
  }

}
