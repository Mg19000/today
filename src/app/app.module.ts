import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormBuilder } from '@angular/forms';

import { AppComponent } from './app.component';
import {HomeComponent} from './components/home/home.component';

import {NotFoundComponent} from './components/not-found/not-found.component';
import {AddTaskComponent} from './components/add-task/add-task.component';
import {TasksService} from  './services/tasks.service';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    AddTaskComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    
  ],
  providers: [TasksService ,FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
