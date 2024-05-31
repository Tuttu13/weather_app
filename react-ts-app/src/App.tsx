import {
  Container,
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
import {WeatherData,cities} from './weather/types';

const WeatherApp: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

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
    <Container>
      <Grid container alignItems="flex-start" justifyContent="flex-start" sx={{ mt: 5 }}>
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
      <Grid container alignItems="center" justifyContent="center" sx={{ mt: 10 }}>
        <Grid item xs={12}>
          <Paper sx={{ width: '100%', overflowX: 'auto', margin: '0 auto' }}>
            <Table stickyHeader sx={{ tableLayout: 'fixed' }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#e0f2f1' }}>都市名</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#e0f2f1' }}>気温（摂氏）</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#e0f2f1' }}>天気</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#e0f2f1' }}>風速</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#e0f2f1' }}>風向き</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#e0f2f1' }}>湿度</TableCell>
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
    </Container>
  );
};

export default WeatherApp;
