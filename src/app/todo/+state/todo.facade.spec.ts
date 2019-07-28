import { TestBed } from '@angular/core/testing';
import { TodoFacade } from './todo.facade';
import { MockTodoService } from '@mock-data/todo-service.mocks';


describe('TodoFacade', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TodoFacade,
      MockTodoService.provide
    ]
  }));

  test('doit créer la facade', () => {
    const facade: TodoFacade = TestBed.get(TodoFacade);
    expect(facade).toBeTruthy();
  });

  test.todo(`doit émettre une action avec la liste des tâches`);
  test.todo(`doit émettre une action avec une nouvelle tâche`);
  test.todo(`doit émettre une action avec une tâche modifiée`);
  test.todo(`doit émettre une action pour filtrer les tâches`);
});
