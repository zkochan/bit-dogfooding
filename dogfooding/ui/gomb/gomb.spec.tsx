import React from 'react';
import { render } from '@testing-library/react';
import { BasicGomb } from './gomb.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicGomb />);
  const rendered = getByText('hello from Gomb new version');
  expect(rendered).toBeTruthy();
});
