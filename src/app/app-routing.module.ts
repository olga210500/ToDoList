import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { ToDoListComponent } from './pages/to-do-list/to-do-list.component';

const routes: Routes = [
  {
    path: '',
    component: ToDoListComponent,
  },
  {
    path: 'addTask',
    component: AddTaskComponent,
  },
  {
    path:'editTask/:id',
    component:EditTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
