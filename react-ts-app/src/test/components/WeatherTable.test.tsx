import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import WeatherTable from '../../weather/components/WeatherTable';

describe('WeatherTable component', () => {
  const weatherData = {
    name: '東京都',
    main: {
      temp: 300,
      humidity: 80,
    },
    weather: [{ description: '曇り' }],
    wind: { speed: 5, deg: 180 },
  };

  it('renders weather data correctly', () => {
    render(<WeatherTable weatherData={weatherData} />);

    // 都市名が表示されていることを確認
    expect(screen.getByText('東京都')).toBeInTheDocument();

    // 気温が摂氏で表示されていることを確認
    expect(screen.getByText('26.9 °C')).toBeInTheDocument();

    // 天気が表示されていることを確認
    expect(screen.getByText('曇り')).toBeInTheDocument();

    // 風速が表示されていることを確認
    expect(screen.getByText('5 m/s')).toBeInTheDocument();

    // 風向きが表示されていることを確認
    expect(screen.getByText('180 °')).toBeInTheDocument();

    // 湿度が表示されていることを確認
    expect(screen.getByText('80 %')).toBeInTheDocument();
  });
});
