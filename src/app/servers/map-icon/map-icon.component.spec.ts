import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapIconComponent } from './map-icon.component';

describe('MapIconComponent', () => {
  let component: MapIconComponent;
  let fixture: ComponentFixture<MapIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MapIconComponent]
    });
    fixture = TestBed.createComponent(MapIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
