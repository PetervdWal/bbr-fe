import { MapPipe } from './map.pipe';

describe('MapPipe', () => {
  it.each`
    key               | url
    ${'Salhan'}       | ${'./assets/maps/Salhan_small.jpg'}
    ${'Kodiak'}       | ${'./assets/maps/kodiak_small.jpg'}
    ${'Old_District'} | ${'./assets/maps/district_small.jpg'}
    ${'District'}     | ${'./assets/maps/district_small.jpg'}
    ${'TensaTown'}    | ${'./assets/maps/Tensatown_small.jpg'}
    ${'UnmappedMap'}  | ${'https://placehold.co/150x100?text=UnmappedMap'}
  `('transforms the $key to $url', ({ key, url }) => {
    const pipe = new MapPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(key)).toStrictEqual(url);
  });
});
