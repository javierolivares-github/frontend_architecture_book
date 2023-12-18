import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";

describe('Navbar', () => {
  test('Navbar renders links', () => {
    render(
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'>Products page</Route>
          <Route path='/cart'>Cart page</Route>
          <Route path='/userProfile'>Profile page</Route>
        </Routes>
      </Router>
    );
    const navElement = screen.getByTestId('navbar-container');
    const productsLink = screen.getByText('Products');
    const cartLink = screen.getByText(/cart/i);
    const profileLink = screen.getByText(/profile/i);
    expect(navElement).toBeInTheDocument();
    expect(productsLink).toBeInTheDocument();
    expect(cartLink).toBeInTheDocument();
    expect(profileLink).toBeInTheDocument();
  });

});