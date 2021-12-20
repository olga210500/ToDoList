import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoTask } from 'src/app/classes/to-do-list-task';
import { ToDoListService } from 'src/app/services/to-do-list.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Input() tasks: ToDoTask[];

  constructor(
    private taskService: ToDoListService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
  goBack(): void {
    this.location.back();
  }

  add(name: string, descriprion: string) {
    name = name.trim();
    descriprion = descriprion.trim();
    let task = new ToDoTask();
    task.name = name;
    task.description = descriprion;
    task.isDone = false;
    this.taskService.postTask(task).subscribe((task) => this.tasks.push(task));
  }
}
