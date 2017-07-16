import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffsetMonitorByUserComponent } from './offset-monitor-by-user.component';

describe('OffsetMonitorByUserComponent', () => {
  let component: OffsetMonitorByUserComponent;
  let fixture: ComponentFixture<OffsetMonitorByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffsetMonitorByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffsetMonitorByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
