import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPipe } from '../map.pipe';

@Component({
  selector: 'app-map-icon',
  standalone: true,
  imports: [CommonModule, MapPipe],
  templateUrl: './map-icon.component.html',
  styleUrls: ['./map-icon.component.scss'],
})
export class MapIconComponent {
  @Input()
  map: string = 'no-map-name';
}
