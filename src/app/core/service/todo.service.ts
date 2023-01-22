import { Injectable } from "@angular/core";
import { TodoModel } from "../model/todo.model";
import { StorageService } from "./storage.service";

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    private todoItems: TodoModel[] = [];
    constructor(private storageService: StorageService) {

    }

    get todoList(): TodoModel[] {
        return this.todoItems;
    }

    delete(item: TodoModel): void {
        const updateItem = this.todoItems.find(f => f.id == item.id);
        const index = this.todoItems.indexOf(updateItem || new TodoModel());
        if (index > -1) {
            this.todoItems.splice(index, 1);
            this.storageService.save(this.todoItems);
        }
    }

    update(item: TodoModel): void {
        const updateItem = this.todoItems.find(f => f.id == item.id);
        const index = this.todoItems.indexOf(updateItem || new TodoModel());
        if (index > -1) {
            this.todoItems[index] = item;
            this.storageService.save(this.todoItems);
        }

    }

    add(item: TodoModel): void {
        this.todoItems.push(item);
        this.storageService.save(this.todoItems);
    }

    getAll(): void {
        this.todoItems = this.storageService.getAllItems();
    }

}