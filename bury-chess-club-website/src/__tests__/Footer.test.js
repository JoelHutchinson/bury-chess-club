import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../layout/Footer';

describe('Footer Component', () => {
  it('renders a footer element', () => {
    render(<Router><Footer /></Router>);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });

  it('contains copyright information', () => {
    render(<Router><Footer /></Router>);
    const copyrightInfo = screen.getByText(/Copyright © 2023/);
    expect(copyrightInfo).toBeInTheDocument();
  });

  it('contains a NavLink to Privacy Policy', () => {
    render(<Router><Footer /></Router>);
    const privacyLink = screen.getByRole('link', { name: /Privacy Policy/ });
    expect(privacyLink).toBeInTheDocument();
    expect(privacyLink).toHaveAttribute('href', '/privacy');
  });

  it('contains Facebook social icon', () => {
    render(<Router><Footer /></Router>);
    const facebookIcon = screen.getByRole('link', { name: /f/ });
    expect(facebookIcon).toBeInTheDocument();
    expect(facebookIcon).toHaveAttribute('href', 'https://www.facebook.com/BuryChessClub/');
    expect(facebookIcon).toHaveAttribute('target', '_blank');
    expect(facebookIcon).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('contains Chess social icon', () => {
    render(<Router><Footer /></Router>);
    const chessIcon = screen.getByRole('link', { name: /♟/ });
    expect(chessIcon).toBeInTheDocument();
    expect(chessIcon).toHaveAttribute('href', 'https://www.chess.com/club/bury-chess-club');
    expect(chessIcon).toHaveAttribute('target', '_blank');
    expect(chessIcon).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
