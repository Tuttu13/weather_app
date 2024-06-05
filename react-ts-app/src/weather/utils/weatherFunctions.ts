import { SelectChangeEvent } from '@mui/material';

export const useHandleCityChange = (
  setCity: React.Dispatch<React.SetStateAction<string>>
) => {
  const handleCityChange = (event: SelectChangeEvent<string>) => {
    setCity(event.target.value as string);
  };

  return handleCityChange;
};
