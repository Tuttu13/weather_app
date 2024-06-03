import { SelectChangeEvent } from '@mui/material/Select';
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
export interface City {
  value: string;
  label: string;
}
[];

export interface WeatherTableProps {
  weatherData: WeatherData | null;
}

export interface CitySelectProps {
  cities: City[];
  selectedCity: string;
  onCityChange: (event: SelectChangeEvent<string>) => void;
}
