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

const mockWeatherData = (
  name: string,
  temp: number,
  humidity: number,
  description: string,
  icon: string,
  windSpeed: number,
  windDeg: number
) => ({
  data: {
    name,
    main: {
      temp,
      humidity,
    },
    weather: [{ description, icon }],
    wind: { speed: windSpeed, deg: windDeg },
  },
});

const selectCity = async (cityName: string) => {
  fireEvent.mouseDown(screen.getByLabelText('都市選択'));
  const listbox = screen.getByRole('listbox');
  fireEvent.click(within(listbox).getByText(cityName));
};

const expectWeatherData = async (
  name: string,
  temp: string,
  description: string,
  iconUrl: string,
  windSpeed: string,
  windDeg: string,
  humidity: string
) => {
  await waitFor(() => {
    const weatherTable = screen.getByRole('table');
    expect(within(weatherTable).getByText(name)).toBeInTheDocument();
    expect(within(weatherTable).getByText(temp)).toBeInTheDocument();
    expect(within(weatherTable).getByText(description)).toBeInTheDocument();
    const icon = within(weatherTable).getByAltText(description);
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('src', iconUrl);
    expect(within(weatherTable).getByText(windSpeed)).toBeInTheDocument();
    expect(within(weatherTable).getByText(windDeg)).toBeInTheDocument();
    expect(within(weatherTable).getByText(humidity)).toBeInTheDocument();
  });
};

describe('CitySelection and WeatherDisplay Integration Test', () => {
  test('初期値から別の都市を選択する', async () => {
    const tokyoWeatherData = mockWeatherData(
      '東京',
      300,
      80,
      '晴れ',
      '01d',
      5,
      180
    );

    mockedAxios.get.mockResolvedValueOnce(tokyoWeatherData);

    render(<App />);

    // 都市選択
    await selectCity('東京');

    // 天気データの表示確認
    await expectWeatherData(
      '東京',
      '26.9 °C',
      '晴れ',
      'http://openweathermap.org/img/wn/01d@2x.png',
      '5 m/s',
      '180 °',
      '80 %'
    );
  });

  test('別の都市から別の都市を選択する', async () => {
    const tokyoWeatherData = mockWeatherData(
      '東京',
      300,
      80,
      '晴れ',
      '01d',
      5,
      180
    );
    const osakaWeatherData = mockWeatherData(
      '大阪',
      295,
      70,
      '曇り',
      '03d',
      3,
      90
    );

    mockedAxios.get
      .mockResolvedValueOnce(tokyoWeatherData)
      .mockResolvedValueOnce(osakaWeatherData);

    render(<App />);

    // 初回の都市選択
    await selectCity('東京');
    await expectWeatherData(
      '東京',
      '26.9 °C',
      '晴れ',
      'http://openweathermap.org/img/wn/01d@2x.png',
      '5 m/s',
      '180 °',
      '80 %'
    );

    // 別の都市選択
    fireEvent.mouseDown(screen.getByRole('combobox'));
    const listbox2 = screen.getByRole('listbox');
    fireEvent.click(within(listbox2).getByText('大阪'));

    await expectWeatherData(
      '大阪',
      '21.9 °C',
      '曇り',
      'http://openweathermap.org/img/wn/03d@2x.png',
      '3 m/s',
      '90 °',
      '70 %'
    );
  });
});
