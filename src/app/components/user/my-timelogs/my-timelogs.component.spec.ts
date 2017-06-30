import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTimelogsComponent } from './my-timelogs.component';

describe('MyTimelogsComponent', () => {
  let component: MyTimelogsComponent;
  let fixture: ComponentFixture<MyTimelogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTimelogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTimelogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
