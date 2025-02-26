import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Task} from 'src/app/interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

tasks:Task[ ] = [ 
{
title : 'categories' ,
description: 'all categories  of articles'
},
{
title : 'products' ,
description: 'all products  of articles'
}  ,
{
title : 'Angular' ,
description: 'all angular  of articles'
}  

]
  constructor(httpclient: HttpClient ) { 
let storedTasks = localStorage.getItem('tasks');
if(storedTasks){
this.tasks =JSON.parse(storedTasks);
}else {
this.tasks =[];
}
}

  
  updateTask(id:any , item:any){
  this.tasks[id] = item ;
  this.storedTasks();
  }
  
  deleteTask(i:number){
  this.tasks.splice(i , 1);
  this.storedTasks();
  }
  
  saveTask(title:any  , description:any){ 
  this.tasks.push({
  title  ,
  description 
  })
  this.storedTasks();
  }
  
  storedTasks(){
localStorage.setItem('tasks' , JSON.stringify(this.tasks));
}
  
  
}
