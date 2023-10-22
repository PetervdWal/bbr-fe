import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bbrMap',
  standalone: true,
})
export class MapPipe implements PipeTransform {
  readonly #prefix = './assets/maps/';
  readonly #placeholder = 'https://placehold.co/150x100?text=';
  readonly #mapNameMap: Record<string, string | undefined> = {
    Azagor: `${this.#prefix}Azagor_small.jpg`,
    Construction: `${this.#prefix}Construction_small.jpg`,
    Salhan: `${this.#prefix}Salhan_small.jpg`,
    Kodiak: `${this.#prefix}kodiak_small.jpg`,
    Old_District: `${this.#prefix}district_small.jpg`,
    District: `${this.#prefix}district_small.jpg`,
    TensaTown: `${this.#prefix}Tensatown_small.jpg`,
  };

  transform(key: string, ...args: unknown[]): string {
    const transformKey = this.#mapNameMap[key];
    return transformKey ? transformKey : `${this.#placeholder}${key}`;
  }
}
