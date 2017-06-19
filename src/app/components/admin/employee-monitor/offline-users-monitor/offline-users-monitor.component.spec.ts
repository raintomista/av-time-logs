import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineUsersMonitorComponent } from './offline-users-monitor.component';

describe('OfflineUsersMonitorComponent', () => {
  let component: OfflineUsersMonitorComponent;
  let fixture: ComponentFixture<OfflineUsersMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineUsersMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineUsersMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
