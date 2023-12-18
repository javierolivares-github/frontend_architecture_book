import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Loading from "./Loading";

describe("Loading", () => {

  test("should renders an html p tag", () => {
    render(
      <Loading message='The data is loading...' />
    );
    const loadingElement = screen.getByTestId('loading-container');
    expect(loadingElement).toBeInTheDocument();
    expect(loadingElement.tagName).toBe('P');
  });

  test("should renders a text", () => {
    render(
      <Loading message='The data is loading...' />
    );
    const loadingElement = screen.getByTestId('loading-container');
    expect(loadingElement).toHaveTextContent('The data is loading');
  });

});