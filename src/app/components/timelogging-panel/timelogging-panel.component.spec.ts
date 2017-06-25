import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeloggingPanelComponent } from './timelogging-panel.component';

describe('TimeloggingPanelComponent', () => {
  let component: TimeloggingPanelComponent;
  let fixture: ComponentFixture<TimeloggingPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeloggingPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeloggingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
