import {Component, OnInit} from '@angular/core';
import { BBRClient, Server } from 'battlebit-remastered-ts-api';

@Component({
  selector: 'app-servers-container',
  templateUrl: './servers-container.component.html',
  styleUrls: ['./servers-container.component.scss']
})
export class ServersContainerComponent implements OnInit {
  readonly #client: BBRClient
  
  servers?: Server[];
  
  constructor() {
    this.#client = new BBRClient();
  }

  async ngOnInit() {
    this.servers = await this.#client.getServers();
  }
  
  async getServers(){
    this.servers = await this.#client.getServers();
  }
}
