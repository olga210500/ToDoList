import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './pages/to-do-list/to-do-list.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './pages/header/header.component';

const appRoutes: Routes =[
  { path: '', component: ToDoListComponent},
  { path: 'addTask', component: AddTaskComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    AddTaskComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [ AppComponent]
})
export class AppModule { }
