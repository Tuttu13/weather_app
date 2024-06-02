import { act, renderHook } from '@testing-library/react-hooks';
import { useFetchWeatherData } from '../../weather/api/weatherAPI';

describe('useFetchWeatherData', () => {
  test('指定された都市の天気データを取得ことの確認(東京)', async () => {
    // setWeatherData 関数をモック化
    const setWeatherData = jest.fn();

    // 外部APIのため、モック化してテストする
    const mockedAxios = require('axios');

    // モックの実装を設定
    mockedAxios.get = jest.fn().mockResolvedValue({
      data: {
        coord: { lon: 139.6917, lat: 35.6895 },
        weather: [{ id: 500, main: 'Rain', description: '小雨', icon: '10n' }],
        base: 'stations',
        main: {
          temp: 295.45,
          feels_like: 295.62,
          temp_min: 293.01,
          temp_max: 297.34,
          pressure: 1012,
          humidity: 72,
        },
        visibility: 10000,
        wind: { speed: 4.12, deg: 180 },
        rain: { '1h': 0.45 },
        clouds: { all: 75 },
        dt: 1717073910,
        sys: {
          type: 2,
          id: 268395,
          country: 'JP',
          sunrise: 1717010858,
          sunset: 1717062616,
        },
        timezone: 32400,
        id: 1850144,
        name: '東京都',
        cod: 200,
      },
    });

    // useFetchWeatherData フックを呼び出して東京のデータを取得する
    renderHook(() => useFetchWeatherData('TOKYO', setWeatherData));

    // setWeatherDataが非同期に実行されるため、actを使用する
    // 非同期な処理（axiosのHTTPリクエスト）が行われ、その後にsetWeatherData関数が呼び出されるという流れ
    await act(async () => {});

    // setWeatherData 関数が東京のデータで呼び出されたかを確認
    expect(setWeatherData).toHaveBeenCalledWith(
      expect.objectContaining({ name: '東京都' })
    );
  });
});
