import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffsetMonitorComponent } from './offset-monitor.component';

describe('OffsetMonitorComponent', () => {
  let component: OffsetMonitorComponent;
  let fixture: ComponentFixture<OffsetMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffsetMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffsetMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
