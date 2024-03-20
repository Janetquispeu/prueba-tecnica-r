import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Button } from './index';

describe('Button Component', () => {
  render(<Button text="button Primary" variant="text" />);
  const button = screen.getByTestId('button');

  test('Button Rendering', () => {
    expect(button).toBeInTheDocument();
  });

  test('Button Text', () => {
    expect(button).toHaveTextContent('button Primary');
  });
});
