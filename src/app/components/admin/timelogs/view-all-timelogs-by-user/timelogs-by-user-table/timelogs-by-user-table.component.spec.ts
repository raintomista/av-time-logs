import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelogsByUserTableComponent } from './timelogs-by-user-table.component';

describe('TimelogsByUserTableComponent', () => {
  let component: TimelogsByUserTableComponent;
  let fixture: ComponentFixture<TimelogsByUserTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelogsByUserTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelogsByUserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
