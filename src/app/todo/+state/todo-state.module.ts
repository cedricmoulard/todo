import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { TodoState } from './todo.state';
import { TodoService } from './todo.service';


@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([TodoState])
  ],
  providers: [TodoService]
})
export class TodoStateModule {
}
