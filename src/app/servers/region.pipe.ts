import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bbrRegion',
  standalone: true,
})
export class RegionPipe implements PipeTransform {
  readonly #regionMap: Record<string, string> = {
    'Brazil_Central': 'https://placehold.co/150x100?text=BR-central',
    'America_Central': 'https://placehold.co/150x100?text=US-central',
    'Europe_Central': 'https://placehold.co/150x100?text=EU-central',
    'Asia_Central': 'https://placehold.co/150x100?text=AS-central',
    'Australia_Central': 'https://placehold.co/150x100?text=AU-central',
    'Japan_Central':'https://placehold.co/150x100?text=JP-central',
  }
  
  transform(region: string): string {
    return this.#regionMap[region];
  }

}
