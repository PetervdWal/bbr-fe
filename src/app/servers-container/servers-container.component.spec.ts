import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersContainerComponent } from './servers-container.component';

describe('ServersContainerComponent', () => {
  let component: ServersContainerComponent;
  let fixture: ComponentFixture<ServersContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServersContainerComponent]
    });
    fixture = TestBed.createComponent(ServersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
