import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTodoComponent } from './filter-todo.component';
import { MockComponent } from 'ng-mocks';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material';

describe('FilterTodoComponent', () => {
  let component: FilterTodoComponent;
  let fixture: ComponentFixture<FilterTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterTodoComponent,
        MockComponent(MatButtonToggle),
        MockComponent(MatButtonToggleGroup),
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('doit créer le composant', () => {
    expect(component).toBeTruthy();
  });

  test.todo(`doit afficher 3 boutons`);
  test.todo(`doit émettre un evènement sur le clic de n'importe quel bouton`);

});
