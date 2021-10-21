import React from 'react';
import { render } from '@testing-library/react';
import { BasicKartya } from './kartya.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicKartya />);
  const rendered = getByText('hello from Kartya');
  expect(rendered).toBeTruthy();
});
