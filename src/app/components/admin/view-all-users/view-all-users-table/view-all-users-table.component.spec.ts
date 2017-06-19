import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllUsersTableComponent } from './view-all-users-table.component';

describe('ViewAllUsersTableComponent', () => {
  let component: ViewAllUsersTableComponent;
  let fixture: ComponentFixture<ViewAllUsersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllUsersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllUsersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
