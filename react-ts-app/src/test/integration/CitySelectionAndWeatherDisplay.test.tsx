import '@testing-library/jest-dom/extend-expect';
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import axios from 'axios';
import App from '../../App';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('CitySelection and WeatherDisplay Integration Test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('初期値から別の都市を選択する', async () => {
    const tokyoWeatherData = {
      data: {
        name: '東京',
        main: {
          temp: 300,
          humidity: 80,
        },
        weather: [{ description: '晴れ' }],
        wind: { speed: 5, deg: 180 },
      },
    };

    mockedAxios.get.mockResolvedValueOnce(tokyoWeatherData);

    render(<App />);

    // 都市選択ボックスをクリック
    fireEvent.mouseDown(screen.getByLabelText('都市選択'));
    // ドロップダウンメニューを取得
    const listbox = screen.getByRole('listbox');
    // ドロップダウンメニューから東京を選択
    fireEvent.click(within(listbox).getByText('東京'));

    // 東京の天気データが表示されるまで待機
    await waitFor(() => {
      const weatherTable = screen.getByRole('table');
      expect(within(weatherTable).getByText('東京')).toBeInTheDocument();
      expect(within(weatherTable).getByText('26.9 °C')).toBeInTheDocument(); // 摂氏温度
      expect(within(weatherTable).getByText('晴れ')).toBeInTheDocument();
      expect(within(weatherTable).getByText('5 m/s')).toBeInTheDocument();
      expect(within(weatherTable).getByText('180 °')).toBeInTheDocument();
      expect(within(weatherTable).getByText('80 %')).toBeInTheDocument();
    });
  });

  test('別の都市から別の都市を選択する', async () => {
    const tokyoWeatherData = {
      data: {
        name: '東京',
        main: {
          temp: 300,
          humidity: 80,
        },
        weather: [{ description: '晴れ' }],
        wind: { speed: 5, deg: 180 },
      },
    };

    const osakaWeatherData = {
      data: {
        name: '大阪',
        main: {
          temp: 295,
          humidity: 70,
        },
        weather: [{ description: '曇り' }],
        wind: { speed: 3, deg: 90 },
      },
    };

    mockedAxios.get
      .mockResolvedValueOnce(tokyoWeatherData)
      .mockResolvedValueOnce(osakaWeatherData);

    render(<App />);

    // 初回の都市選択ボックスをクリック
    fireEvent.mouseDown(screen.getByLabelText('都市選択'));
    // ドロップダウンメニューを取得
    const listbox = screen.getByRole('listbox');
    // ドロップダウンメニューから東京を選択
    fireEvent.click(within(listbox).getByText('東京'));

    await waitFor(() => {
      const weatherTable = screen.getByRole('table');
      expect(within(weatherTable).getByText('東京')).toBeInTheDocument();
      expect(within(weatherTable).getByText('26.9 °C')).toBeInTheDocument();
      expect(within(weatherTable).getByText('晴れ')).toBeInTheDocument();
      expect(within(weatherTable).getByText('5 m/s')).toBeInTheDocument();
      expect(within(weatherTable).getByText('180 °')).toBeInTheDocument();
      expect(within(weatherTable).getByText('80 %')).toBeInTheDocument();
    });

    // 別の都市選択ボックスを再度クリック
    fireEvent.mouseDown(screen.getByLabelText('東京'));
    // ドロップダウンメニューを取得
    const listbox2 = screen.getByRole('listbox');
    // ドロップダウンメニューから大阪を選択
    fireEvent.click(within(listbox2).getByText('大阪'));

    await waitFor(() => {
      const weatherTable = screen.getByRole('table');
      expect(within(weatherTable).getByText('大阪')).toBeInTheDocument();
      expect(within(weatherTable).getByText('21.9 °C')).toBeInTheDocument(); // 摂氏温度
      expect(within(weatherTable).getByText('曇り')).toBeInTheDocument();
      expect(within(weatherTable).getByText('3 m/s')).toBeInTheDocument();
      expect(within(weatherTable).getByText('90 °')).toBeInTheDocument();
      expect(within(weatherTable).getByText('70 %')).toBeInTheDocument();
    });
  });
});
