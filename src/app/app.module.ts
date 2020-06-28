import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TransformDirective } from './transform.directive';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoChildComponent } from './todo-list/todo-child/todo-child.component';
import { TodoDonetaskComponent } from './todo-list/todo-donetask/todo-donetask.component';

@NgModule({
  declarations: [
    AppComponent,
    TransformDirective,
    TodoListComponent,
    TodoChildComponent,
    TodoDonetaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
