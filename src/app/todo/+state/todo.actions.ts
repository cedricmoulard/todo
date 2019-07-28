import { TodoInterface } from '../todo.interface';

/**
 * Liste des actions pour la gestion des tâches
 */
export namespace TodoActions {

  /**
   * Ajoute des tâches au state
   */
  export class AddAll {
    static readonly type = '[Todo] Add All';

    constructor(public todoList: TodoInterface.Todo[]) {
    }
  }

  /**
   * Ajoute une tâche
   */
  export class Add {
    static readonly type = '[Todo] Add Todo';

    constructor(public todo: TodoInterface.Todo) {
    }
  }

  /**
   * Mets à jour une tâches
   */
  export class Update {
    static readonly type = '[Todo] Update';

    constructor(public todo: TodoInterface.Todo) {
    }
  }

  /**
   * Filtre les tâches
   */
  export class Filter {
    static readonly type = '[Todo] Filter';

    constructor(public filter: TodoInterface.Filter) {
    }
  }

}
