import { render, screen } from '@testing-library/react';
import React from 'react';
import { Example } from '../view/example';

describe('App tests', () => {
  it('should contains the heading 1', () => {
    render(<Example />);
    const heading = screen.getByText(/subtitle-example/i);
    expect(heading).toBeInTheDocument();
  });
});
