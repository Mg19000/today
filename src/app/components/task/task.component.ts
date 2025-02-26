import { Component, EventEmitter, Input, Output , NgModule,OnInit , NgZone} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TasksService} from '../../services/tasks.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {Task} from 'src/app/interfaces/task';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{
taskId:any;
task:any;
id :any;

constructor( private route: ActivatedRoute ,  
public  taskingServices:TasksService , private router: Router,){}


ngOnInit(): void {
this.taskId = this.route.snapshot.paramMap.get('id');
this.task = this.taskingServices.tasks[this.taskId];
}  



deleteTask(){
this.taskingServices.deleteTask(this.taskId);
this.router.navigate(['/']);
}

updateTask(){
this.taskingServices.updateTask(this.taskId ,this.task);
this.router.navigate(['/']);
}

}
