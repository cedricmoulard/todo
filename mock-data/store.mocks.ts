import { Store } from '@ngxs/store';

export namespace MockStore {
  export const mock = {
    dispatch: jest.fn(),
    select: jest.fn()
  };

  export const provide = {
    provide: Store,
    useValue: mock
  };
}
