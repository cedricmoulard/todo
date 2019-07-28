import { NgxsModule, Store } from '@ngxs/store';
import { async, TestBed } from '@angular/core/testing';
import { TodoPartialState, TodoState } from './todo.state';
import { MockTodoState } from '@mock-data/todo-state.mocks';
import { TodoActions } from './todo.actions';
import { MockTodo } from '@mock-data/todo.mocks';
import { TodoInterface } from '../todo.interface';

describe('TodoState', () => {

  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([TodoState]),
      ],
    }).compileComponents();

    store = TestBed.get(Store);

  }));

  test(`doit ajouter la liste des tâches`, async () => {

    store.dispatch(new TodoActions.AddAll([
      MockTodo.completedTodo,
      MockTodo.todoInProgress
    ]));

    expect(store.selectSnapshot((state: TodoPartialState) => state.todo)).toEqual(MockTodoState.withTodoList);

  });

  test(`doit ajouter une tâche`, async () => {

    store.reset({
      todo: {
        ...MockTodoState.withTodoList,
        todoList: [
          MockTodo.completedTodo
        ]
      }
    } as TodoPartialState);

    store.dispatch(new TodoActions.Add(
      MockTodo.todoInProgress
    ));

    expect(store.selectSnapshot((state: TodoPartialState) => state.todo)).toEqual(MockTodoState.withTodoList);

  });

  test(`doit mettre à jour une tâche`, async () => {

    store.reset({
      todo: MockTodoState.withTodoList,

    } as TodoPartialState);

    store.dispatch(new TodoActions.Update(
      {
        id: MockTodo.todoInProgress.id,
        name: 'Nouveau nom',
        completed: true
      }
    ));

    expect(store.selectSnapshot((state: TodoPartialState) => state.todo)).toEqual({
      ...MockTodoState.withTodoList,
      todoList: [
        MockTodo.completedTodo,
        {
          id: MockTodo.todoInProgress.id,
          name: 'Nouveau nom',
          completed: true
        }
      ]
    });

  });

  test(`doit changer le filtre`, async () => {

    store.reset({
      todo: MockTodoState.withTodoList,

    } as TodoPartialState);

    store.dispatch(new TodoActions.Filter(
      TodoInterface.Filter.COMPLETED
    ));

    expect(store.selectSnapshot((state: TodoPartialState) => state.todo)).toEqual({
      ...MockTodoState.withTodoList,
      filter: TodoInterface.Filter.COMPLETED
    });

  });

});
