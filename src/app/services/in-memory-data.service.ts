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
        id:11,
        name:'Do home tasks',
        descriprion:'oatmeal, fruits ; morning tea',
        isDone:false
    
      },
      {
        id:12,
          name:'Finish the project',
          descriprion:'finish the project to softserve',
          isDone:false
      
        },
        {
          id:13,
          name:'Finish the project',
          descriprion:'finish the project to softserve',
          isDone:false
      
        },
        {
          id:14,
          name:'Finish the project',
          descriprion:'finish the project to softserve',
          isDone:false
      
        },
        {
          id:15,
          name:'Finish the project',
          descriprion:'finish the project to softserve',
          isDone:false
      
        }
    ];
    return {tasks};
  }

  genId(tasks: ToDoTask[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 11;
  }
}
