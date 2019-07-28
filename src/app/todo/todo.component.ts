import { Component, Inject, OnInit } from '@angular/core';
import { TodoInterface } from './todo.interface';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { TodoFacade } from './+state/todo.facade';
import { TodoState } from './+state/todo.state';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Select(TodoState.todoList) todoList$: Observable<TodoInterface.Todo[]>;
  @Select(TodoState.filter) filter$: Observable<TodoInterface.Filter>;
  @Select(TodoState.loaded) loaded$: Observable<boolean>;

  constructor(@Inject(TodoFacade) private readonly todoFacade: TodoFacade) {
  }

  ngOnInit() {
    this.todoFacade.getAll();
  }

  changeTodoStatus(todo: TodoInterface.Todo) {
    this.todoFacade.changeStatus(todo);
  }

  addTodo(name: string) {
    this.todoFacade.add(name);
  }

  filter(filter: TodoInterface.Filter) {
    this.todoFacade.filter(filter);
  }
}
