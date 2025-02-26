import { Component  ,OnInit  } from '@angular/core';
import {TasksService} from 'src/app/services/tasks.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent  implements OnInit{
constructor( private route: ActivatedRoute ,  
public taskingServices:TasksService){}
ngOnInit(): void {}

deleteTask(i:number){
this.taskingServices.deleteTask(i);
}
}
