import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ServersContainerComponent} from './servers-container.component';
import {ServersComponent} from '../servers/servers.component';

describe('ServersContainerComponent', () => {
  let component: ServersContainerComponent;
  let fixture: ComponentFixture<ServersContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServersContainerComponent, ServersComponent]
    });
    fixture = TestBed.createComponent(ServersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
