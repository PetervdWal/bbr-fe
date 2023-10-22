import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bbrRegion',
  standalone: true,
})
export class RegionPipe implements PipeTransform {
  readonly #placeholder = 'https://placehold.co/150x100?text=';
  readonly #regionMap: Record<string, string | undefined> = {
    Brazil_Central: `${this.#placeholder}BR-central`,
    America_Central: `${this.#placeholder}US-central`,
    Europe_Central: `${this.#placeholder}EU-central`,
    Asia_Central: `${this.#placeholder}AS-central`,
    Australia_Central: `${this.#placeholder}AU-central`,
    Japan_Central: `${this.#placeholder}JP-central`,
  };

  transform(region: string): string {
    const transformKey = this.#regionMap[region];
    return transformKey ? transformKey : `${this.#placeholder}${region}`;
  }
}
