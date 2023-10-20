import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TableNavigationComponent} from './table-navigation.component';
import {CommonModule} from "@angular/common";

describe('TableNavigationComponent', () => {
  let component: TableNavigationComponent;
  let fixture: ComponentFixture<TableNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TableNavigationComponent, CommonModule]
    });
    fixture = TestBed.createComponent(TableNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
