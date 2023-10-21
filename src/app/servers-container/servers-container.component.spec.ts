import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersContainerComponent } from './servers-container.component';
import { ServersComponent } from '../servers/servers.component';

describe('ServersContainerComponent', () => {
  let component: ServersContainerComponent;
  let fixture: ComponentFixture<ServersContainerComponent>;

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([]),
      }),
    ) as any;

    TestBed.configureTestingModule({
      declarations: [ServersContainerComponent],
      imports: [ServersComponent],
    });
    fixture = TestBed.createComponent(ServersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
