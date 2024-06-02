import { SelectChangeEvent } from '@mui/material';
import { act, renderHook } from '@testing-library/react-hooks';
import { useHandleCityChange } from '../../weather/utiles/weatherFunctions';

describe('useHandleCityChange', () => {
  test('未設定から東京を設定する確認', () => {
    // 初期値を設定
    const initialCity = '';
    const setCity = jest.fn();

    // フックをレンダリング
    const { result } = renderHook(() => useHandleCityChange(setCity));

    // ハンドラー関数を取得
    const handleCityChange = result.current;

    // シミュレートされたイベント
    const event = { target: { value: 'TOKYO' } } as SelectChangeEvent<string>;

    // ハンドラー関数を呼び出す
    act(() => {
      handleCityChange(event);
    });

    // setCity 関数が適切に呼び出されたことを確認
    expect(setCity).toHaveBeenCalledWith('TOKYO');
  });

  test('東京から大阪を設定する確認', () => {
    // 初期値を設定
    const initialCity = 'TOKYO';
    const setCity = jest.fn();

    // フックをレンダリング
    const { result } = renderHook(() => useHandleCityChange(setCity));

    // ハンドラー関数を取得
    const handleCityChange = result.current;

    // シミュレートされたイベント
    const event = { target: { value: 'OSAKA' } } as SelectChangeEvent<string>;

    // ハンドラー関数を呼び出す
    act(() => {
      handleCityChange(event);
    });

    // setCity 関数が適切に呼び出されたことを確認
    expect(setCity).toHaveBeenCalledWith('OSAKA');
  });
});
