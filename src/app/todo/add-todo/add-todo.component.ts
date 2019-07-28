import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  template: `
    <div>
      <mat-form-field class="name">
        <input #name matInput placeholder="name">
      </mat-form-field>

      <button mat-flat-button (click)="addClicked(name.value)" color="primary"
              [disabled]="!name.value || name.value.length < 4">
        Ajouter
      </button>
    </div>
  `,
  styles: [`
    .name {
      margin-right: 8px;
    }`]
})
export class AddTodoComponent implements OnInit {
  @ViewChild('name', {static: false}) inputName: ElementRef;
  @Output() addTodo: EventEmitter<string>;

  constructor() {
    this.addTodo = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  public addClicked(name: string): void {

    this.addTodo.emit(name);
    this.inputName.nativeElement.value = '';

  }

}
