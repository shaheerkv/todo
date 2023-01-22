import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoModel } from 'src/app/core/model/todo.model';
import { Guid } from 'src/app/core/service/guid';
import { TodoService } from 'src/app/core/service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoItems: TodoModel[] = [];
  todoForm! : FormGroup;
  @ViewChild("textInput") inputField: any;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.initializeForm();
    this.getTodoItems();
  }

  initializeForm(): void {
    this.todoForm =  new FormGroup({
      todoItem: new FormControl('', [Validators.required]),
    });
  }

  getTodoItems(): void {
    this.todoService.getAll();
    this.todoItems = this.todoService.todoList;
  }


  onClick(): void {
    const data: TodoModel = {
      description: '',
      id: Guid.newGuid(),
      isDeleted: false,
      isCompleted: false,
      title: this.todoForm.controls['todoItem'].value
    }
    this.todoService.add(data);
    this.todoForm.reset();
  }

  onStatusChange(item: TodoModel) {
    item.isCompleted = !item.isCompleted;
    this.todoService.update(item);
    this.getTodoItems();
  }
  
  onDelete(item: TodoModel){
    this.todoService.delete(item);
  }

  focusClicked(): void{
    this.inputField.nativeElement.focus();
  }

}
