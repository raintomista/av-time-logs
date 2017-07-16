import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOffsetsTableComponent } from './user-offsets-table.component';

describe('UserOffsetsTableComponent', () => {
  let component: UserOffsetsTableComponent;
  let fixture: ComponentFixture<UserOffsetsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOffsetsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOffsetsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
