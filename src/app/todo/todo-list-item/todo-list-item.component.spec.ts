import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListItemComponent } from './todo-list-item.component';

describe('TodoListItemComponent', () => {
  let component: TodoListItemComponent;
  let fixture: ComponentFixture<TodoListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('doit créer le composant', () => {
    expect(component).toBeTruthy();
  });

  test.todo(`doit afficher le todo`);
  test.todo(`doit émettre un evènement sur le clic`);
  test.todo(`doit barrer le todo s'il est terminé`);
});
