import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor( private httpClient: HttpClient) { }

  public getTodoItems(): Observable<any> {

    return this.httpClient.get('https://localhost:5001/api/todo');
  }
}
