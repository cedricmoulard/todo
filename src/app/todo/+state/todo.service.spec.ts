import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let todoService: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService]
    });

    todoService = TestBed.get(TodoService);
  });

  test('doit créer le service', () => {
    expect(todoService).toBeTruthy();
  });

  test(`doit retourner la liste des todos`,async ()=>{


    todoService.getAll().subscribe(todoList => expect(todoList).toEqual(null));


  });
  test.todo(`doit ajouter un todo`);
  test.todo(`doit mettre à jour un todo`);
  test.todo(`doit émettre une action pour filtrer les todo`);
});
