import { RegionPipe } from './region.pipe';

describe('RegionPipe', () => {
  it.each`
    key                    | url
    ${'Brazil_Central'}    | ${'BR-central'}
    ${'America_Central'}   | ${'US-central'}
    ${'Europe_Central'}    | ${'EU-central'}
    ${'Asia_Central'}      | ${'AS-central'}
    ${'Australia_Central'} | ${'AU-central'}
    ${'Japan_Central'}     | ${'JP-central'}
    ${'UnmappedRegion'}    | ${'UnmappedRegion'}
  `('transforms the proper $key', ({ key, url }) => {
    const pipe = new RegionPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(key)).toStrictEqual(url);
  });
});
