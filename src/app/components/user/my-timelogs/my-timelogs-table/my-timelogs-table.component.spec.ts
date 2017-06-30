import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTimelogsTableComponent } from './my-timelogs-table.component';

describe('MyTimelogsTableComponent', () => {
  let component: MyTimelogsTableComponent;
  let fixture: ComponentFixture<MyTimelogsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTimelogsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTimelogsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
