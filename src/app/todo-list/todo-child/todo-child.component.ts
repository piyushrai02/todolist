import { Component, OnInit, Input } from '@angular/core';
import { TodoSerService } from 'src/app/todo-ser.service';
var data = []

@Component({
  selector: 'app-todo-child',
  templateUrl: './todo-child.component.html',
  styleUrls: ['./todo-child.component.css']
})
export class TodoChildComponent implements OnInit {
  @Input() data:string
  @Input() desc
  @Input() repeatVal
  data1: string;
  tododata = []
  doneTask: any;
  
  constructor(private authSer:TodoSerService) { }

  ngOnInit() {
    this.data1 = JSON.stringify(this.data)
    console.log(this.data)
    this.authSer.tododData.subscribe(res=>{
      this.tododata.push(res)
    })
    this.authSer.undonetask.subscribe(res=>{
      this.tododata.push(res)
      console.log(this.tododata)
    })
  }

  doneItem(index,donetask){
    
    this.tododata.splice(index,1)
    console.log(this.doneTask)
    this.authSer.doneTask.next(donetask)
   
  }

}
