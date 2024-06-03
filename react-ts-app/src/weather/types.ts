import { SelectChangeEvent } from '@mui/material/Select';

/**
 * 都市データのインターフェース。
 * 選択可能な都市のリストを定義します。
 */
export interface City {
  value: string;
  label: string;
}

/**
 * 天気データのインターフェース。
 * OpenWeatherMap APIから取得するデータの構造を定義します。
 */
export interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
    deg: number;
  };
}

/**
 * WeatherTableコンポーネントのプロパティのインターフェース。
 * 天気データをテーブルに表示するためのプロパティを定義します。
 */
export interface WeatherTableProps {
  weatherData: WeatherData | null;
}

/**
 * CitySelectコンポーネントのプロパティのインターフェース。
 * 都市選択ドロップダウンのためのプロパティを定義します。
 */
export interface CitySelectProps {
  cities: City[];
  selectedCity: string;
  onCityChange: (event: SelectChangeEvent<string>) => void;
}
