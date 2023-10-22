import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerNameComponent } from './server-name.component';
import { getElementByAutomationId } from '../../testing';

describe('ServerNameComponent', () => {
  let component: ServerNameComponent;
  let fixture: ComponentFixture<ServerNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ServerNameComponent],
    });
    fixture = TestBed.createComponent(ServerNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display community icon if server is not official', () => {
    component.server = {
      IsOfficial: false,
    } as any;

    fixture.detectChanges();

    const element = getElementByAutomationId(
      fixture.debugElement,
      'community-icon',
    );

    expect(element).toBeTruthy();
  });

  it('should display official icon if server is official', () => {
    component.server = {
      IsOfficial: true,
    } as any;

    fixture.detectChanges();

    const element = getElementByAutomationId(
      fixture.debugElement,
      'official-server-icon',
    );

    expect(element).toBeTruthy();
  });

  it('should display password icon if server is password protected', () => {
    component.server = {
      HasPassword: true,
    } as any;

    fixture.detectChanges();

    const element = getElementByAutomationId(
      fixture.debugElement,
      'password-protected-icon',
    );

    expect(element).toBeTruthy();
  });
  it('should hide password icon if server is password protected', () => {
    component.server = {
      HasPassword: false,
    } as any;

    fixture.detectChanges();

    const element = getElementByAutomationId(
      fixture.debugElement,
      'password-protected-icon',
    );

    expect(element).toBeNull();
  });
});
