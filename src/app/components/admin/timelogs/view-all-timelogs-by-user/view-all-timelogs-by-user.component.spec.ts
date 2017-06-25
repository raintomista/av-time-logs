import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllTimelogsByUserComponent } from './view-all-timelogs-by-user.component';

describe('ViewAllTimelogsByUserComponent', () => {
  let component: ViewAllTimelogsByUserComponent;
  let fixture: ComponentFixture<ViewAllTimelogsByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllTimelogsByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllTimelogsByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
