import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import ProductList from "./ProductList";
import { productData } from './productData';

describe('ProductList', () => {

  test('should renders a loading message when status is loading', () => {
    render(
      <ProductList status='loading' />
    );
    const loadingElement = screen.getByTestId('loading-container');
    expect(loadingElement).toBeInTheDocument();
    expect(loadingElement).toHaveTextContent(/the data is loading/i)
  });

  test('should renders an error message when status is errored', () => {
    render(
      <ProductList status='errored' />
    );
    const errorElement = screen.getByTestId('error-container');
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent(/something went wrong/i)
  });

  test('should renders a product list when status is loaded', () => {
    render(
      <ProductList status='loaded' data={productData} />
    );
    const listElement = screen.getAllByTestId('card-container');
    const firstElement = listElement[0];
    expect(listElement.length).toBe(3);
    expect(firstElement).toHaveTextContent(/latte/i);
    expect(firstElement).toHaveTextContent(/2.90/i);
    expect(firstElement).toHaveTextContent(/add to cart/i);
  });

})