import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Error from "./Error";

describe("Error", () => {

  test("should renders an html p tag", () => {
    render(
      <Error message='Something went wrong...' />
    );
    const ErrorElement = screen.getByTestId('error-container');
    expect(ErrorElement).toBeInTheDocument();
    expect(ErrorElement.tagName).toBe('P');
  });

  test("should has a error class", () => {
    render(
      <Error message='Something went wrong...' />
    );
    const ErrorElement = screen.getByTestId('error-container');
    expect(ErrorElement).toHaveClass('error');
  });

  test("should renders a string text", () => {
    render(
      <Error message='Something went wrong...' />
    );
    const ErrorElement = screen.getByTestId('error-container');
    expect(ErrorElement).toHaveTextContent('Something went wrong...');
  });

});