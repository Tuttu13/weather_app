import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import { WeatherTableProps } from '../types';

const WeatherTable: React.FC<WeatherTableProps> = ({ weatherData }) => {
  const renderWeatherDataRow = () => {
    if (!weatherData) return null;

    const { name, main, weather, wind } = weatherData;
    const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    return (
      <TableRow>
        <TableCell>{name}</TableCell>
        <TableCell>{(main.temp - 273.15).toFixed(1)} °C</TableCell>
        <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={iconUrl}
            alt={weather[0].description}
            style={{ width: '50px', height: '50px', marginRight: '8px' }} // サイズを小さくするためのスタイル
          />
          {weather[0].description}
        </TableCell>
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
            <TableCell
              sx={{
                fontWeight: 'bold',
                backgroundColor: '#e0f2f1',
                borderBottom: '1px solid black',
              }}
            >
              都市名
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 'bold',
                backgroundColor: '#e0f2f1',
                borderBottom: '1px solid black',
              }}
            >
              気温（摂氏）
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 'bold',
                backgroundColor: '#e0f2f1',
                borderBottom: '1px solid black',
              }}
            >
              天気
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 'bold',
                backgroundColor: '#e0f2f1',
                borderBottom: '1px solid black',
              }}
            >
              風速
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 'bold',
                backgroundColor: '#e0f2f1',
                borderBottom: '1px solid black',
              }}
            >
              風向き
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 'bold',
                backgroundColor: '#e0f2f1',
                borderBottom: '1px solid black',
              }}
            >
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
