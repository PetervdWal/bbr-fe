import { RegionPipe } from './region.pipe';

describe('RegionPipe', () => {
  it.each`
    key                    | url
    ${'Brazil_Central'}    | ${'https://placehold.co/150x100?text=BR-central'}
    ${'America_Central'}   | ${'https://placehold.co/150x100?text=US-central'}
    ${'Europe_Central'}    | ${'https://placehold.co/150x100?text=EU-central'}
    ${'Asia_Central'}      | ${'https://placehold.co/150x100?text=AS-central'}
    ${'Australia_Central'} | ${'https://placehold.co/150x100?text=AU-central'}
    ${'Japan_Central'}     | ${'https://placehold.co/150x100?text=JP-central'}
    ${'UnmappedRegion'}    | ${'https://placehold.co/150x100?text=UnmappedRegion'}
  `('transforms the proper $key', ({ key, url }) => {
    const pipe = new RegionPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(key)).toStrictEqual(url);
  });
});
