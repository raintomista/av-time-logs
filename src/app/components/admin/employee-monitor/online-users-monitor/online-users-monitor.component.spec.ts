import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineUsersMonitorComponent } from './online-users-monitor.component';

describe('OnlineUsersMonitorComponent', () => {
  let component: OnlineUsersMonitorComponent;
  let fixture: ComponentFixture<OnlineUsersMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineUsersMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineUsersMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
