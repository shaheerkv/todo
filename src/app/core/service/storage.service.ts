import { Injectable } from "@angular/core";
import { TODO_DATABASE } from "../configuration/app.configuration";
import { TodoModel } from "../model/todo.model";

@Injectable({
    providedIn: 'root'
})
export class StorageService{
    constructor(){
        
    }

    getAllItems(): TodoModel[] {
        return JSON.parse(localStorage.getItem(TODO_DATABASE)|| '')  as TodoModel[];
    }

    save(todoItems: TodoModel[]): void {
        localStorage.setItem(TODO_DATABASE, JSON.stringify(todoItems));
    }
}