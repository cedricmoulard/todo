import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoComponent } from './add-todo.component';
import { MockComponent } from 'ng-mocks';
import { MatButton, MatFormField, MatInput } from '@angular/material';

describe('AddTodoComponent', () => {
  let component: AddTodoComponent;
  let fixture: ComponentFixture<AddTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddTodoComponent,
        MockComponent(MatInput),
        MockComponent(MatButton),
        MockComponent(MatFormField),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('doit créer le composant', () => {
    expect(component).toBeTruthy();
  });

  test.todo(`ne doit pas activer le bouton si le nom est trop court`);
  test.todo(`doit activer le bouton si le nom est assez long`);
  test.todo(`doit émettre un evènement sur le clic`);


});
