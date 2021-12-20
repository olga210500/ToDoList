import { Component, OnInit } from '@angular/core';
import { ToDoTask } from 'src/app/classes/to-do-list-task';
import { ToDoListService } from 'src/app/services/to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  tasks: ToDoTask[];
  constructor(private taskService: ToDoListService) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
  deleteTask(task:ToDoTask){
    this.tasks = this.tasks.filter(t => t.id !== task.id);
    console.log(task)

    this.taskService.deleteTask(task).subscribe()
  }
 
}
