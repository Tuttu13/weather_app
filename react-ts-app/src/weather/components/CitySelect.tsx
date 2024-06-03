import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { City, CitySelectProps } from '../types';

const CitySelect: React.FC<CitySelectProps> = ({
  cities,
  selectedCity,
  onCityChange,
}) => {
  return (
    <FormControl sx={{ m: 0, width: 125 }}>
      <InputLabel id="city-select-label">都市選択</InputLabel>
      <Select
        labelId="city-select-label"
        id="city-select"
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
