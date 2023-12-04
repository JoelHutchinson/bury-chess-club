// Header.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header Component', () => {
  test('renders header elements', () => {
    render(<MemoryRouter><Header /></MemoryRouter>);
    
    // Check if the logo image is rendered
    const logoImage = screen.getByAltText('Bury Chess Club Logo');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', '../assets/bury-chess-club-logo.jpg');
    
    // Check if the club name heading is rendered
    const clubNameHeading = screen.getByText('Bury Chess Club');
    expect(clubNameHeading).toBeInTheDocument();
    
    // Check if navigation links are rendered
    const aboutLink = screen.getByText('About Us');
    const contactLink = screen.getByText('Contact');
    const competitionsLink = screen.getByText('Club Competitions');
    const gamesLink = screen.getByText('Games');

    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(competitionsLink).toBeInTheDocument();
    expect(gamesLink).toBeInTheDocument();

    // Add assertions for other navigation links, IDs, or classes as needed
  });

  test('matches snapshot', () => {
    const { container } = render(<MemoryRouter><Header /></MemoryRouter>);
    expect(container).toMatchSnapshot();
  });

  test('clicking navigation link triggers navigation', () => {
    render(<MemoryRouter><Header /></MemoryRouter>);
    const aboutLink = screen.getByText('About Us');
    fireEvent.click(aboutLink);
    expect(screen.getByText('About Page')).toBeInTheDocument(); // Adjust to match your routing behavior
  });
});
