import {Component, OnInit} from '@angular/core';
import {BBRClient, Server} from 'battlebit-remastered-ts-api'

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  servers: Server[] | undefined = [];

  readonly #client: BBRClient

  constructor() {
    this.#client = new BBRClient();
  }

  async ngOnInit() {
    this.servers = await this.#client.getServers();
  }


  async getServers() {
    const result = await this.#client.getServers();
    this.servers = result?.slice(0, 10);
    console.log('Refresh result', result);
  }
}
