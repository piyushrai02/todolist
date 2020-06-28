import { TestBed } from '@angular/core/testing';

import { TodoSerService } from './todo-ser.service';

describe('TodoSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoSerService = TestBed.get(TodoSerService);
    expect(service).toBeTruthy();
  });
});
