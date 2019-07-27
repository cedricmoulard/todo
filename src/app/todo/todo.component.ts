import {Component, OnInit} from '@angular/core';
import {TodoInterface} from "./todo.interface";
import {Select, Store} from "@ngxs/store";
import {TodoActions} from "./+state/todo.actions";
import {TodoState} from "./+state/todo.state";
import {Observable} from "rxjs";


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Select(TodoState.todoList) todoList$: Observable<TodoInterface.Todo[]>;
  @Select(TodoState.filter) filter$: Observable<TodoInterface.Filter>;
  @Select(TodoState.loaded) loaded$: Observable<boolean>;

  constructor(private store: Store) {
    store.dispatch(new TodoActions.GetAll());
  }

  ngOnInit() {
  }

  changeTodoStatus(todo: TodoInterface.Todo) {
    this.store.dispatch(new TodoActions.ChangeStatus(todo.id));
  }

  addTodo(name: string) {
    this.store.dispatch(new TodoActions.Add(name));
  }

  filter(filter: TodoInterface.Filter) {
    this.store.dispatch(new TodoActions.Filter(filter));
  }
}
