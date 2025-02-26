import { Component  ,OnInit  } from '@angular/core';
import {TasksService} from 'src/app/services/tasks.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent  implements OnInit{
constructor( private route: Router ,  
public taskingServices:TasksService){}
ngOnInit(): void {}

saveTask(title:any , description:any){

this.taskingServices.saveTask(title. value , description. value);
this.route.navigate(['/']);
}
}