import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoTask } from 'src/app/classes/to-do-list-task';
import { ToDoListService } from 'src/app/services/to-do-list.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  @Input() task:ToDoTask;

  constructor(
    private taskService:ToDoListService,
    private route: ActivatedRoute,
    private locatin:Location) { }

    ngOnInit() {
      this.getTask();
    }
  
    getTask(): void {

      const get_id=this.route.snapshot.paramMap.get('id');
      this.taskService.getTask(Number(get_id)).subscribe(t=>this.task=t)
    }
  goBack():void{
    this.locatin.back();
    
  }
  editTask( ):void{
  

    this.taskService.putTask(this.task)
    .subscribe(() => this.goBack());
  }

}
