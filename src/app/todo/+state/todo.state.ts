import {Action, Selector, State, StateContext} from "@ngxs/store";
import {TodoActions} from "./todo.actions";
import {TodoInterface} from "../todo.interface";
import * as _ from 'lodash';
import {TodoService} from "../todo.service";
import {tap} from "rxjs/operators";


interface TodoStateModel {
  loaded: boolean;
  todoList: TodoInterface.Todo[];
  filter: TodoInterface.Filter
}

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    loaded: false,
    todoList: [],
    filter: TodoInterface.Filter.ALL
  }
})
export class TodoState {

  constructor(private readonly todoService: TodoService) {
  }

  @Selector()
  static todoList(state: TodoStateModel) {
    if (TodoInterface.Filter.ALL === state.filter) {
      return _.orderBy(state.todoList, ['name'], ['asc']);
    }
    return _.orderBy(state.todoList.filter(todo => TodoInterface.Filter.COMPLETED === state.filter ? todo.completed : !todo.completed), ['name'], ['asc']);

  }

  @Selector()
  static filter(state: TodoStateModel) {
    return state.filter
  }

  @Selector()
  static loaded(state: TodoStateModel) {
    return state.loaded
  }

  @Action(TodoActions.GetAll)
  getAll({getState, setState}: StateContext<TodoStateModel>) {
    return this.todoService.getAll().pipe(
      tap(todoList => setState({
        ...getState(),
        loaded: true,
        todoList
      }))
    );
  }

  @Action(TodoActions.Add)
  add({getState, setState}: StateContext<TodoStateModel>, {name}: TodoActions.Add) {

    return this.todoService.add(name).pipe(
      tap(todoSaved => setState({
        ...getState(),
        todoList: [
          ...getState().todoList.filter(todoInList => todoSaved.id !== todoInList.id),
          todoSaved
        ]
      }))
    );

  }

  @Action(TodoActions.ChangeStatus)
  changeStatus({getState, setState}: StateContext<TodoStateModel>, {id}: TodoActions.ChangeStatus) {

    const todoToBeUpdated: TodoInterface.Todo = getState().todoList.find(todo => id === todo.id);

    if (todoToBeUpdated) {

      return this.todoService.save({
        ...todoToBeUpdated,
        completed: !todoToBeUpdated.completed
      }).pipe(
        tap(todo => setState({
          ...getState(),
          todoList: [
            ...getState().todoList.filter(todoInList => todoInList.id !== todo.id),
            todo
          ]
        }))
      );

    }

  }

  @Action(TodoActions.Filter)
  filter({getState, setState}: StateContext<TodoStateModel>, {filter}: TodoActions.Filter) {

    setState({
      ...getState(),
      filter
    })
  }
}
