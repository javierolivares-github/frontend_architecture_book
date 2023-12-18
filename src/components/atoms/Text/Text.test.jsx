import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Text from "./Text";

describe("Text", () => {

  test("should renders an html p tag", () => {
    render(
      <Text>
        This is a Text component.
      </Text>
    );
    const textElement = screen.getByTestId('text-container');
    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName).toBe('P');
  });

  test("should renders a text", () => {
    render(
      <Text>
        This is a Text component.
      </Text>
    );
    const textElement = screen.getByTestId('text-container');
    expect(textElement).toHaveTextContent('This is a Text component.');
  });

});