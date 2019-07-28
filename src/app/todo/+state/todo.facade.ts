import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from '../todo.service';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { TodoActions } from './todo.actions';
import { map } from 'rxjs/operators';
import { TodoInterface } from '../todo.interface';

/**
 * Facade pour la gestion des tâches
 * Permets le découpage des responsabilités entre les reduceurs et les side effects
 */
@Injectable()
export class TodoFacade {
  constructor(@Inject(TodoService) private readonly todoService: TodoService) {

  }

  @Dispatch()
  getAll(): Observable<TodoActions.AddAll> {
    return this.todoService.getAll().pipe(
      map(todoList => new TodoActions.AddAll(todoList))
    );
  }

  @Dispatch()
  add(name: string): Observable<TodoActions.Add> {

    return this.todoService.add(name).pipe(
      map(newTodo => new TodoActions.Add(newTodo))
    );

  }

  @Dispatch()
  changeStatus(todo: TodoInterface.Todo): Observable<TodoActions.Update> {

    return this.todoService.update(todo.id, {completed: !todo.completed}).pipe(
      map(updatedTodo => new TodoActions.Update(updatedTodo))
    );

  }

  @Dispatch()
  filter(filter: TodoInterface.Filter): TodoActions.Filter {

    return new TodoActions.Filter(filter);

  }


}
