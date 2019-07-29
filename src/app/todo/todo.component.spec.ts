import { TodoComponent } from './todo.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { MockComponent } from 'ng-mocks';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { FilterTodoComponent } from './filter-todo/filter-todo.component';
import { MockStore } from '@mock-data/store.mocks';

describe('TodoComponent', () => {

  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoComponent,
        MockComponent(TodoListItemComponent),
        MockComponent(TodoListComponent),
        MockComponent(AddTodoComponent),
        MockComponent(FilterTodoComponent),
      ],
      imports: [NgxsModule.forRoot([])],
      providers: [
        MockStore.provide
      ]
    });

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    fixture.detectChanges();

    MockStore.mock.select.mockImplementation(() => null);
  });

  test('doit créer le composant', () => {
    expect(component).toBeTruthy();
  });

  test('doit appeler le select 4 fois', () => {
    expect(MockStore.mock.select).toBeCalledTimes(4);
  });

  test('doit charger la liste des tâches à la création', () => {

    expect(MockStore.mock.dispatch).toBeCalledTimes(1);

  });

  test.todo(`doit afficher le message d'attente si les tâches ne sont pas chargées`);
  test.todo(`doit afficher le titre si les tâches sont chargées`);
  test.todo(`doit afficher la liste des tâches si les tâches sont chargées`);
  test.todo(`doit afficher le filtre si les tâches sont chargées`);
  test.todo(`doit émettre une action lors de la création du composant`);
  test.todo(`doit émettre une action lors d'un clic sur une tâche`);
  test.todo(`doit émettre une action lors d'un changement de filtre`);
});
