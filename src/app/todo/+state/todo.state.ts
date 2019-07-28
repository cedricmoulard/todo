import { Action, Selector, State, StateContext } from '@ngxs/store';
import { TodoActions } from './todo.actions';
import { TodoInterface } from '../todo.interface';
import * as _ from 'lodash';


interface TodoStateModel {
  loaded: boolean;
  todoList: TodoInterface.Todo[];
  filter: TodoInterface.Filter;
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

  @Selector()
  static todoList(state: TodoStateModel) {
    if (TodoInterface.Filter.ALL === state.filter) {
      return _.orderBy(state.todoList, ['name'], ['asc']);
    }
    return _.orderBy(state.todoList.filter(
      todo => TodoInterface.Filter.COMPLETED === state.filter
        ? todo.completed
        : !todo.completed),
      ['name'],
      ['asc']);

  }

  @Selector()
  static filter(state: TodoStateModel) {
    return state.filter;
  }

  @Selector()
  static loaded(state: TodoStateModel) {
    return state.loaded;
  }

  @Action(TodoActions.AddAll)
  addAll({getState, setState}: StateContext<TodoStateModel>, {todoList}: TodoActions.AddAll) {

    setState({
      ...getState(),
      loaded: true,
      todoList
    });
  }

  @Action(TodoActions.Add)
  add({patchState, getState}: StateContext<TodoStateModel>, {todo}: TodoActions.Add) {
    patchState({
      todoList: [
        ...getState().todoList,
        todo
      ]
    });
  }

  @Action(TodoActions.Update)
  changeStatus({getState, setState}: StateContext<TodoStateModel>, {todo}: TodoActions.Update) {

    setState({
      ...getState(),
      todoList: [
        ...getState().todoList.filter(todoInList => todo.id !== todoInList.id),
        todo
      ]
    });
  }

  @Action(TodoActions.Filter)
  filter({getState, setState}: StateContext<TodoStateModel>, {filter}: TodoActions.Filter) {

    setState({
      ...getState(),
      filter
    });
  }
}
