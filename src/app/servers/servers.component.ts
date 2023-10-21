import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';
import {Server} from 'battlebit-remastered-ts-api'
import {TableNavigationComponent} from "../table-navigation/table-navigation.component";
import {RegionPipe} from './region.pipe';

@Component({
  selector: 'app-servers',
  standalone: true,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
  imports: [CommonModule, TableNavigationComponent, RegionPipe],
})
export class ServersComponent {
  navigationIndex: number = 0;

  @Input()
  servers?: Server[];

  amountOfNavigationItems(servers: Server[]) {
    return Math.floor(servers.length / 20)
  }


  onIndexClicked(index: number) {
    this.navigationIndex = index;
  }
}
