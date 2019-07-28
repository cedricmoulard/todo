import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [TodoService]
  }));

  test('doit créer le service', () => {
    const service: TodoService = TestBed.get(TodoService);
    expect(service).toBeTruthy();
  });

  test.todo(`doit retourner la liste des todos`);
  test.todo(`doit ajouter un todo`);
  test.todo(`doit mettre à jour un todo`);
  test.todo(`doit émettre une action pour filtrer les todo`);
});
