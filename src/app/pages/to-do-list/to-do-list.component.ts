import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  ngOnInit(): void {
  }
  title = 'to-do-list';
 
  tasks=[
    {
       isDone:true,
      taskName:'Do home tasks',
      taskDescription:'oatmeal, fruits &amp; morning tea'
    },
    {
      isDone:false,
      
      taskName:'Do angular project',
      taskDescription:'Finish the project'
    },
    {
      isDone:true,
      
      taskName:'Read the book',
      taskDescription:''
    }
  ]

}
