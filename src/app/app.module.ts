import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './pages/to-do-list/to-do-list.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './pages/header/header.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { ToDoListService } from './services/to-do-list.service';
import { HttpClientModule } from '@angular/common/http';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';


@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    AddTaskComponent,
    HeaderComponent,
    EditTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [ToDoListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
