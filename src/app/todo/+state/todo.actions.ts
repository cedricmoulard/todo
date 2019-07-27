import {TodoInterface} from "../todo.interface";

export namespace TodoActions {

  export class GetAll {
    static readonly type = '[Todo] Get All';
  }

  export class Add {
    static readonly type = '[Todo] Add Todo';
    constructor(public name: string) {}
  }

  export class ChangeStatus {
    static readonly type = '[Todo] Change Status';
    constructor(public id: string) {}
  }

  export class Filter {
    static readonly type = '[Todo] Filter';
    constructor(public filter: TodoInterface.Filter) {}
  }

}
