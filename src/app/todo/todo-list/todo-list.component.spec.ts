import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { MockComponent } from 'ng-mocks';
import { MatList, MatListItem } from '@angular/material';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoListComponent,
        MockComponent(MatList),
        MockComponent(MatListItem),
        MockComponent(TodoListItemComponent),
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('doit créer le composant', () => {
    expect(component).toBeTruthy();
  });

  test.todo(`doit afficher la liste des todo`);
  test.todo(`doit transmettre un evènement lors du clic sur un todo`);
});
