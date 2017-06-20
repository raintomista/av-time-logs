import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelogsTableComponent } from './timelogs-table.component';

describe('TimelogsTableComponent', () => {
  let component: TimelogsTableComponent;
  let fixture: ComponentFixture<TimelogsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelogsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelogsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
