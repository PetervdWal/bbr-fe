import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bbrRegion',
  standalone: true,
})
export class RegionPipe implements PipeTransform {
  readonly #regionMap: Record<string, string | undefined> = {
    Brazil_Central: 'BR-central',
    America_Central: `US-central`,
    Europe_Central: `EU-central`,
    Asia_Central: `AS-central`,
    Australia_Central: `AU-central`,
    Japan_Central: `JP-central`,
  };

  transform(region: string): string {
    const transformKey = this.#regionMap[region];
    return transformKey ? transformKey : `${region}`;
  }
}
