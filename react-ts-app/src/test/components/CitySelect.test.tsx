import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import CitySelect from '../../weather/components/CitySelect';

// モックの都市データ
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
  { value: 'FUKUOKA', label: '福岡' },
];

test('CitySelect component renders correctly', () => {
  const selectedCity = 'TOKYO';
  const mockOnChange = jest.fn();

  render(
    <CitySelect
      cities={cities}
      selectedCity={selectedCity}
      onCityChange={mockOnChange}
    />
  );

  // セレクトボックスのラベルを取得
  const selectLabel = screen.getByLabelText('都市選択');

  // セレクトボックスが正しく表示されていることを確認
  expect(selectLabel).toBeInTheDocument();
});
