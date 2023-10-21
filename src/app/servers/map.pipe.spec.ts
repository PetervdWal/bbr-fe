import { MapPipe } from './map.pipe';

describe('MapPipe', () => {
  it.each`
    key                | url
    ${'Azagor'}        | ${'https://placehold.co/150x100?text=Azagor'}
    ${'Construction'}  | ${'https://placehold.co/150x100?text=Construction'}
    ${'MultuIslands'}  | ${'https://placehold.co/150x100?text=MultuIslands'}
    ${'SandySunset'}   | ${'https://placehold.co/150x100?text=SandySunset'}
    ${'Valley'}        | ${'https://placehold.co/150x100?text=Valley'}
    ${'Lonovo'}        | ${'https://placehold.co/150x100?text=Lonovo'}
    ${'Namak'}         | ${'https://placehold.co/150x100?text=Namak'}
    ${'Basra'}         | ${'https://placehold.co/150x100?text=Basra'}
    ${'Old_Namak'}     | ${'https://placehold.co/150x100?text=Old_Namak'}
    ${'Old_Eduardovo'} | ${'https://placehold.co/150x100?text=Old_Eduardovo'}
    ${'Old_OilDunes'}  | ${'https://placehold.co/150x100?text=Old_OilDunes'}
    ${'WineParadise'}  | ${'https://placehold.co/150x100?text=WineParadise'}
    ${'River'}         | ${'https://placehold.co/150x100?text=River'}
    ${'OilDunes'}      | ${'https://placehold.co/150x100?text=OilDunes'}
    ${'Eduardovo'}     | ${'https://placehold.co/150x100?text=Eduardovo'}
    ${'Isle'}          | ${'https://placehold.co/150x100?text=Isle'}
    ${'Wakistan'}      | ${'https://placehold.co/150x100?text=Wakistan'}
    ${'ZalfiBay'}      | ${'https://placehold.co/150x100?text=ZalfiBay'}
    ${'Salhan'}        | ${'./assets/maps/Salhan_small.jpg'}
    ${'Kodiak'}        | ${'./assets/maps/kodiak_small.jpg'}
    ${'Old_District'}  | ${'./assets/maps/district_small.jpg'}
    ${'District'}      | ${'./assets/maps/district_small.jpg'}
    ${'TensaTown'}     | ${'./assets/maps/Tensatown_small.jpg'}
    ${'Dustydew'}      | ${'https://placehold.co/150x100?text=Dustydew'}
  `('transforms the proper $key', ({ key, url }) => {
    const pipe = new MapPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(key)).toStrictEqual(url);
  });
});
