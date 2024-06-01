import { Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import { useFetchWeatherData } from './weather/api/weatherAPI';
import { cities } from './weather/cities';
import WeatherTable from './weather/components//WeatherTable';
import CitySelect from './weather/components/CitySelect';
import { WeatherData } from './weather/types';
import { useHandleCityChange } from './weather/utiles/weatherFunctions';

const WeatherApp: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useFetchWeatherData(city, setWeatherData);
  const handleCityChange = useHandleCityChange(setCity);

  return (
    <Container>
      <Grid container alignItems="flex-start" justifyContent="flex-start" sx={{ mt: 20 }}>
        <CitySelect cities={cities} selectedCity={city} onCityChange={handleCityChange} />
      </Grid>
      <Grid container alignItems="center" justifyContent="center" sx={{ mt: 10 }}>
        <WeatherTable weatherData={weatherData} />
      </Grid>
    </Container>
  );
};

export default WeatherApp;
