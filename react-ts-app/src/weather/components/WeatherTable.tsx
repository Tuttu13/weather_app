import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import { WeatherData } from '../types';

interface WeatherTableProps {
  weatherData: WeatherData | null;
}

const WeatherTable: React.FC<WeatherTableProps> = ({ weatherData }) => {
  const renderWeatherDataRow = () => {
    if (!weatherData) return null;

    const { name, main, weather, wind } = weatherData;

    return (
      <TableRow>
        <TableCell>{name}</TableCell>
        <TableCell>{(main.temp - 273.15).toFixed(1)} °C</TableCell>
        <TableCell>{weather[0].description}</TableCell>
        <TableCell>{wind.speed} m/s</TableCell>
        <TableCell>{wind.deg} °</TableCell>
        <TableCell>{main.humidity} %</TableCell>
      </TableRow>
    );
  };

  return (
    <Paper sx={{ width: '100%', overflowX: 'auto', margin: '0 auto' }}>
      <Table stickyHeader sx={{ tableLayout: 'fixed' }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#e0f2f1' }}>
              都市名
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#e0f2f1' }}>
              気温（摂氏）
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#e0f2f1' }}>
              天気
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#e0f2f1' }}>
              風速
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#e0f2f1' }}>
              風向き
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#e0f2f1' }}>
              湿度
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderWeatherDataRow()}</TableBody>
      </Table>
    </Paper>
  );
};

export default WeatherTable;
