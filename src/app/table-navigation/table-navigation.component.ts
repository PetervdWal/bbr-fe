import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'ui-table-navigation',
  standalone: true,
  templateUrl: './table-navigation.component.html',
  styleUrls: ['./table-navigation.component.scss'],
  imports: [
    CommonModule
  ]

})
export class TableNavigationComponent {
  #amount?: number;
  
  @Input()
  set amountOfItems(amount: number){
    console.log(amount);
    this.#amount = amount;
    this.navigationItems = Array.from(Array(amount).keys())
    console.log(this.navigationItems);
  }
  
  navigationItems?: number[];

  @Output()
  indexClicked = new EventEmitter<number>;

  onClick(index: number) {
    this.indexClicked.emit(index);
  }
}
