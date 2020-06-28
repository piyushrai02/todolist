import { Component, OnInit } from '@angular/core';
import { TodoSerService } from 'src/app/todo-ser.service';

@Component({
  selector: 'app-todo-donetask',
  templateUrl: './todo-donetask.component.html',
  styleUrls: ['./todo-donetask.component.css']
})
export class TodoDonetaskComponent implements OnInit {
  donetask = []
  undonetask: any;
  undonedataPush = [];

  constructor(private authSer:TodoSerService) { }

  ngOnInit() {
    this.authSer.doneTask.subscribe(res=>{
      let dataval = []
      dataval.push(res)
      this.donetask.push(res)
      console.log(res)
    })

   
  }

  undoneTask(undoneData,i){
    this.donetask.splice(i,1)

    this.authSer.undonetask.next(undoneData)
  }

}
