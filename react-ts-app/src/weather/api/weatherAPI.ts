import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { WeatherData } from '../types';

export const useFetchWeatherData = (
  city: string,
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherData | null>>
) => {
  useEffect(() => {
    if (city) {
      axios
        .get<WeatherData>(
          `${process.env.REACT_APP_OW_API_URL}?q=${city}&lang=${process.env.REACT_APP_OW_API_LANG}&appid=${process.env.REACT_APP_OW_API_KEY}`
        )
        .then((response: AxiosResponse<WeatherData>) => {
          setWeatherData(response.data);
        })
        .catch((error: AxiosError) => {
          console.error('Error fetching the weather data', error);
        });
    }
  }, [city]);
};
