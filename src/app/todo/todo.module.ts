import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoListModule } from './todo-list/todo-list.module';
import { NgxsModule } from '@ngxs/store';
import { TodoState } from './+state/todo.state';
import { AddTodoModule } from './add-todo/add-todo.module';
import { FilterTodoModule } from './filter-todo/filter-todo.module';
import { TodoService } from './todo.service';
import { TodoFacade } from './+state/todo.facade';


@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    TodoListModule,
    AddTodoModule,
    FilterTodoModule,
    NgxsModule.forFeature([TodoState])
  ],
  providers: [TodoService, TodoFacade]
})
export class TodoModule {
}
