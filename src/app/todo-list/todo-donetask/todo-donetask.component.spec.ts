import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDonetaskComponent } from './todo-donetask.component';

describe('TodoDonetaskComponent', () => {
  let component: TodoDonetaskComponent;
  let fixture: ComponentFixture<TodoDonetaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDonetaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDonetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
