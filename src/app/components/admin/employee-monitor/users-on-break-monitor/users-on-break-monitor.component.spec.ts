import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersOnBreakMonitorComponent } from './users-on-break-monitor.component';

describe('UsersOnBreakMonitorComponent', () => {
  let component: UsersOnBreakMonitorComponent;
  let fixture: ComponentFixture<UsersOnBreakMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersOnBreakMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersOnBreakMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
