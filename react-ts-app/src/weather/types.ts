export const cities = [
  { value: "SAPPORO", label: "札幌" },
  { value: "SENDAI", label: "仙台" },
  { value: "TOKYO", label: "東京" },
  { value: "YOKOHAMA", label: "横浜" },
  { value: "OSAKA", label: "大阪" },
  { value: "KYOTO", label: "京都" },
  { value: "KOBE", label: "神戸" },
  { value: "NAGOYA", label: "名古屋" },
  { value: "HIROSHIMA", label: "広島" },
  { value: "FUKUOKA", label: "福岡" },
];

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
