import axios, { AxiosError, AxiosResponse } from 'axios';
import { useCallback, useEffect } from 'react';
import { WeatherData } from '../types';

export const useFetchWeatherData = (
  city: string,
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherData | null>>
) => {
  const fetchWeatherData = useCallback(() => {
    if (city) {
      axios
        .get<WeatherData>(
          `${process.env.REACT_APP_OW_API_URL}?q=${city}&lang=${process.env.REACT_APP_OW_API_LANG}&appid=${process.env.REACT_APP_OW_API_KEY}`
        )
        .then((response: AxiosResponse<WeatherData>) => {
          console.log(`Fetched weather data for ${city}:`, response.data);
          setWeatherData(response.data);
        })
        .catch((error: AxiosError) => {
          console.error(`Error fetching the weather data for ${city}`, error);
        });
    }
  }, [city, setWeatherData]);

  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);
};
