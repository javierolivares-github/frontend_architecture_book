import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import ProductListItem from "./ProductListItem";

describe("ProductListItem", () => {

  test("shows on sale label when isOnSale", () => {
    render(
      <ProductListItem 
        name= 'Moccachino'
        imageUrl= 'https://source.unsplash.com/tNALoIZhqVM/200x100/'
        price= '$1.9'
        isOnSale
      />
    );
    const headingElement = screen.getByTestId('heading2-container');
    expect(headingElement).toHaveTextContent('(On Sale');
  });

  test("disables the button and shows the sold out label when isSoldOut", () => {
    render(
      <ProductListItem 
        name= 'Moccachino'
        imageUrl= 'https://source.unsplash.com/tNALoIZhqVM/200x100/'
        price= '$1.9'
        isSoldOut
      />
    );
    const headingElement = screen.getByTestId('heading2-container');
    const buttonElement = screen.getByTestId('button-container');
    expect(headingElement).toHaveTextContent('(Sold Out');
    expect(buttonElement).toHaveAttribute('disabled');
  });

  test("calls a callback function when the button is clicked!", () => {
    const onAddToCart = vi.fn();
    render(
      <ProductListItem 
        name= 'Moccachino'
        imageUrl= 'https://source.unsplash.com/tNALoIZhqVM/200x100/'
        price= '$1.9'
        onAddToCart={onAddToCart}
      />
    );
    const buttonElement = screen.getByTestId('button-container');
    fireEvent.click(buttonElement);
    expect(onAddToCart).toHaveBeenCalledOnce();
  });

});