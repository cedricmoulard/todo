import { TodoComponent } from './todo.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { TodoInterface } from './todo.interface';
import { MockComponent } from 'ng-mocks';
import { TodoState } from './+state/todo.state';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { TodoFacade } from './+state/todo.facade';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { FilterTodoComponent } from './filter-todo/filter-todo.component';

const defaultsState = {
  todo: {
    loading: false,
    todoList: [],
    filter: TodoInterface.Filter.ALL
  }
};

const mockTodoFacade = {
  getAll: jest.fn(),
  add: jest.fn(),
  changeStatus: jest.fn()
};

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
      imports: [
        NgxsModule.forRoot([TodoState], {
          defaultsState
        }),
        NgxsDispatchPluginModule.forRoot()
      ],
      providers: [
        {
          provide: TodoFacade,
          useValue: mockTodoFacade
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    fixture.detectChanges();

  });

  test('doit créer le composant', () => {
    expect(component).toBeTruthy();
  });

  test('doit charger la liste des todo à la création', () => {
    expect(mockTodoFacade.getAll).toBeCalledTimes(1);
  });

  test.todo(`doit afficher le message d'attente si les todos ne sont pas chargés`);
  test.todo(`doit afficher le titre si les todos sont chargés`);
  test.todo(`doit afficher la liste des todo si les todos sont chargés`);
  test.todo(`doit afficher le filtre si les todos sont chargés`);
  test.todo(`doit émettre une action lors de la création du composant`);
  test.todo(`doit émettre une action lors d'un clic sur un todo`);
  test.todo(`doit émettre une action lors d'un changement de filtre`);
});
