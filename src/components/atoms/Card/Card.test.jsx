import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Card from "./Card";

describe("Card", () => {

  test("should renders an html div tag", () => {
    render(
      <Card>
        This is a Card component.
      </Card>
    );
    const cardElement = screen.getByTestId('card-container');
    expect(cardElement).toBeInTheDocument();
    expect(cardElement.tagName).toBe('DIV');
  });

  test("should has a card class", () => {
    render(
      <Card>
        This is a Card component.
      </Card>
    );
    const cardElement = screen.getByTestId('card-container');
    expect(cardElement).toHaveClass('card');
  });

  test("should renders a children", () => {
    render(
      <Card>
        This is a Card component.
      </Card>
    );
    const cardElement = screen.getByTestId('card-container');
    expect(cardElement).toHaveTextContent('This is a Card component.');
  });

  test("should has a highlight class when highlight", () => {
    render(
      <Card highlight>
        This is a Card component.
      </Card>
    );
    const cardElement = screen.getByTestId('card-container');
    expect(cardElement).toHaveClass('card highlight');
  });

});