import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React from 'react';
import { City } from '../types';

interface CitySelectProps {
  cities: City[];
  selectedCity: string;
  onCityChange: (event: SelectChangeEvent<string>) => void;
}

const CitySelect: React.FC<CitySelectProps> = ({
  cities,
  selectedCity,
  onCityChange,
}) => {
  return (
    <FormControl sx={{ m: 0, width: 125 }}>
      <InputLabel id="demo-simple-select-label">都市選択</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedCity}
        label="都市選択"
        onChange={onCityChange}
      >
        {cities.map((city: City) => (
          <MenuItem key={city.value} value={city.value}>
            {city.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CitySelect;
