import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

export const getElementByAutomationId = (
  debugElement: DebugElement,
  automationId: string,
): DebugElement =>
  debugElement.query(By.css(`[data-bbr-automation-id="${automationId}"]`));
