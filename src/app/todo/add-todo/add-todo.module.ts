import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddTodoComponent} from './add-todo.component';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule} from "@angular/material";


@NgModule({
  declarations: [AddTodoComponent],
  exports: [
    AddTodoComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule
  ]
})
export class AddTodoModule {
}
