import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
import axios,{AxiosError,AxiosResponse} from 'axios';
import React,{useEffect,useState} from 'react';

interface WeatherData {
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

const WeatherApp: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const cities = [
    { value: 'SAPPORO', label: '札幌' },
    { value: 'SENDAI', label: '仙台' },
    { value: 'TOKYO', label: '東京' },
    { value: 'YOKOHAMA', label: '横浜' },
    { value: 'OSAKA', label: '大阪' },
    { value: 'KYOTO', label: '京都' },
    { value: 'KOBE', label: '神戸' },
    { value: 'NAGOYA', label: '名古屋' },
    { value: 'HIROSHIMA', label: '広島' },
    { value: 'FUKUOKA', label: '福岡' }
  ];

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

  const handleCityChange = (event: SelectChangeEvent<string>) => {
    setCity(event.target.value);
  };

  return (
    <div>
      <Grid container alignItems="flex-start" justifyContent="flex-start" style={{ marginLeft: '10vw', marginTop: '15vh' }}>
        <Grid item>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-simple-select-label">都市選択</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={city}
              label="都市選択"
              onChange={handleCityChange}
            >
              {cities.map((city) => (
                <MenuItem key={city.value} value={city.value}>
                  {city.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justifyContent="center" style={{ height: '40vh' }}>
        <Grid item xs={12} md={8} lg={6}>
          <Paper sx={{ width: '100%', overflowX: 'auto' }}>
            <Table stickyHeader style={{ tableLayout: 'fixed' }}>
              <TableHead>
                <TableRow>
                  <TableCell>都市名</TableCell>
                  <TableCell>気温（摂氏）</TableCell>
                  <TableCell>天気</TableCell>
                  <TableCell>風速</TableCell>
                  <TableCell>風向き</TableCell>
                  <TableCell>湿度</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {weatherData && (
                  <TableRow>
                    <TableCell>{weatherData.name}</TableCell>
                    <TableCell>{(weatherData.main.temp - 273.15).toFixed(1)} °C</TableCell>
                    <TableCell>{weatherData.weather[0].description}</TableCell>
                    <TableCell>{weatherData.wind.speed} m/s</TableCell>
                    <TableCell>{weatherData.wind.deg} °</TableCell>
                    <TableCell>{weatherData.main.humidity} %</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default WeatherApp;