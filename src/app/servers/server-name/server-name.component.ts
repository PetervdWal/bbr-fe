import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Server } from 'battlebit-remastered-ts-api';

@Component({
  selector: 'app-server-name',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './server-name.component.html',
  styleUrls: ['./server-name.component.scss'],
})
export class ServerNameComponent {
  @Input()
  server?: Server;
}
