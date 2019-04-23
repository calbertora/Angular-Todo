import { Component } from '@angular/core';
import { TodoServiceService } from './todo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestTodo';
  todoItems = [];

  constructor(private todoService: TodoServiceService){
    this.todoService.getTodoItems().subscribe(response => {
      this.todoItems = response;
    });
  }
}
