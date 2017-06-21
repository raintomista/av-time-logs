import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkMonitorTableComponent } from './network-monitor-table.component';

describe('NetworkMonitorTableComponent', () => {
  let component: NetworkMonitorTableComponent;
  let fixture: ComponentFixture<NetworkMonitorTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkMonitorTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkMonitorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
