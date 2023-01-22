import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoRoutingModule } from './todo-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoListModule } from 'src/app/shared/components/todo-list/todo-list.module';

@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TodoListModule
  ],
  declarations: [TodoComponent]
})
export class TodoModule { }
