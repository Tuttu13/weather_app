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
          console.log(`Fetched weather data for ${city}:`, response.data); // 都市名をログに追加
          setWeatherData(response.data);
        })
        .catch((error: AxiosError) => {
          console.error(`Error fetching the weather data for ${city}`, error); // エラーメッセージにも都市名を追加
        });
    }
  }, [city, setWeatherData]);

  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);
};
