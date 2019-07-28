import { TodoService } from '../src/app/todo/todo.service';

export namespace MockTodoService {
  export const mock = {
    getAll: jest.fn(),
    add: jest.fn(),
    update: jest.fn()
  };

  export const provide = {
    provide: TodoService,
    useValue: mock
  };
}
