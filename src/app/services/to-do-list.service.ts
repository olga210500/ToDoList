import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { ToDoTask } from '../classes/to-do-list-task';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  private Url = 'api/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<ToDoTask[]> {
    return this.http.get<ToDoTask[]>(this.Url).pipe(res=>{
      console.log('You get all tasks');
      return res;
    });
  }
  postTask(newTask: ToDoTask): Observable<ToDoTask> {
    return this.http.post<ToDoTask>(this.Url, newTask, httpOptions).pipe(res=>{
      console.log("You just posted new task");
      return res;
    }

    );
  }
  deleteTask(task: ToDoTask): Observable<ToDoTask> {
    const url = `${this.Url}/${task.id}`;
    return this.http.delete<ToDoTask>(url, httpOptions).pipe(res=>{
      console.log('You just deleted the task');
      return res;
    });
  }
  putTask(task: ToDoTask): Observable<any> {
    return this.http.put(this.Url, task,httpOptions).pipe(
      res=>{
        console.log('You just edited task');
        return res;
      }
    );
  }
  getTask(id:number):Observable<ToDoTask>{
    const url=`${this.Url}/${id}`;
    return this.http.get<ToDoTask>(url,httpOptions).pipe(
      res=>{
        console.log('You get cuttent task');
        return res;
      }
    );
  }
}
