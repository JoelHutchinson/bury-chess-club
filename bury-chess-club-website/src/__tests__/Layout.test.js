import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from '../layout/Layout';

describe('Layout Component', () => {
  it('renders header, footer, and main panels', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const headerElement = screen.getByRole('banner');
    const footerElement = screen.getByRole('contentinfo');
    const mainElement = screen.getByRole('main');

    expect(headerElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
    expect(mainElement).toBeInTheDocument();
  });
});