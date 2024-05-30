import { WeatherState } from "../types";

// prefectureに紐づいたWeatherinfoを取得
export const getWeatherByPrefecture = async (
  prefecture: string
): Promise<WeatherState> => {
  const res = await fetch(
    `${process.env.REACT_APP_OW_API_URL}/weather?q=${prefecture}&lang=${process.env.REACT_APP_OW_API_LANG}&appid=${process.env.REACT_APP_OW_API_KEY}`
  );
  const Weatherinfo = await res.json();
  return Weatherinfo;
};
