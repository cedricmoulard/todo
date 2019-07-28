import { TestBed } from '@angular/core/testing';

import { TodoFacade } from './todo.facade';
import { TodoService } from '../todo.service';

const mockTodoService = {
  getAll: jest.fn(),
  add: jest.fn(),
  update: jest.fn()
};

describe('TodoFacade', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TodoFacade,
      {
        provide: TodoService,
        useValue: mockTodoService
      }
    ]
  }));

  test('doit créer le service', () => {
    const facade: TodoFacade = TestBed.get(TodoFacade);
    expect(facade).toBeTruthy();
  });

  test.todo(`doit retourner la liste des todos`);
  test.todo(`doit ajouter un todo`);
  test.todo(`doit mettre à jour un todo`);
  test.todo(`doit émettre une action pour filtrer les todo`);
});
