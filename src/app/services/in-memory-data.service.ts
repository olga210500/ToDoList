import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Injectable } from '@angular/core';
import { ToDoTask } from '../classes/to-do-list-task';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      {
        id:0,
        name:'Do home tasks',
        description:'morning tea',
        isDone:true
    
      },
      {
        id:1,
          name:'Buy new clothes',
          description:'buy new jeans on sale',
          isDone:false
      
        },
        {
          id:2,
          name:'Finish the project',
          description:'finish the project to softserve',
          isDone:true
      
        },
        {
          id:3,
          name:'read a book',
          description:'Find and read some interesting book',
          isDone:false
      
        },
        {
          id:4,
          name:'Visit grandparents',
          description:'visit grand parents in village',
          isDone:false
      
        }
    ];
    return {tasks};
  }

  genId(tasks: ToDoTask[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
  }
}
