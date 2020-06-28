import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TodoSerService } from '../todo-ser.service';

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
})
export class TodoListComponent implements OnInit {
  todoForm: FormGroup;
  dataAll: any;
  taskName: any;
  desc: any;
  repeat: any;
  textMsg: string;

  constructor(private fb: FormBuilder, private aurthServ: TodoSerService) {}

  ngOnInit() {
    this.todoForm = this.fb.group({
      taskname: ["", Validators.required],
      description: ["", Validators.required],
      repeatTask: ["", Validators.required],
    });

    this.todoForm.statusChanges.subscribe((status) => {
      if (status == "VALID") {
        this.aurthServ.tododData.next(this.todoForm.value);

        this.todoForm.reset();
      } else {
        this.textMsg = "all field are manidatory"
        // console.log("form is not valid");
      }
    });
  }

  onSubmit() {
    console.log();
  }
}
