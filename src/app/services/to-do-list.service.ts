import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ToDoTask } from '../classes/to-do-list-task';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  private Url = 'api/tasks'; 

  constructor(
    private http: HttpClient) { }

  
  getTasks (): Observable<ToDoTask[]> {
    return this.http.get<ToDoTask[]>(this.Url)
  }
  postTask(newTask:ToDoTask):Observable<ToDoTask>{
    console.log('you just posted')
    return this.http.post<ToDoTask>(this.Url,newTask,httpOptions)

  }
}
