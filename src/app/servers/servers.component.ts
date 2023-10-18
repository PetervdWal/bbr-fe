import {Component, Input, OnInit} from '@angular/core';
import {BBRClient, Server} from 'battlebit-remastered-ts-api'

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {
  @Input()
  navigationIndex: number = 0;

  @Input()
  servers?: Server[];
}
