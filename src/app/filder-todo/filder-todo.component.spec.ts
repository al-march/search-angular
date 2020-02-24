import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilderTodoComponent } from './filder-todo.component';

describe('FilderTodoComponent', () => {
  let component: FilderTodoComponent;
  let fixture: ComponentFixture<FilderTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilderTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilderTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
