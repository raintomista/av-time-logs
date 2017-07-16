import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffsetMonitorTableComponent } from './offset-monitor-table.component';

describe('OffsetMonitorTableComponent', () => {
  let component: OffsetMonitorTableComponent;
  let fixture: ComponentFixture<OffsetMonitorTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffsetMonitorTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffsetMonitorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
