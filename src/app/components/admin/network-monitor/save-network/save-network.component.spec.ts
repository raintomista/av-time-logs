import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveNetworkComponent } from './save-network.component';

describe('SaveNetworkComponent', () => {
  let component: SaveNetworkComponent;
  let fixture: ComponentFixture<SaveNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
