import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoModel } from 'src/app/core/model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() dataItem: TodoModel =  new TodoModel();
  @Output() deleteItem = new EventEmitter();
  @Output() updateItem = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }

  onStatusChange(item: TodoModel) {
    this.updateItem.emit(item);
  }
  
  onDelete(item: TodoModel){
    this.deleteItem.emit(item);
  }

}
