import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Heading2 from "./Heading2";

describe("Heading2", () => {

  test("should renders the component, the correct html tag and the text specified", () => {
    render(
      <Heading2>
        This is the heading2 component.
      </Heading2>
    );
    const headingElement = screen.getByTestId('heading2-container');
    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName).toBe('H2');
    expect(headingElement).toHaveTextContent(
      "This is the heading2 component."
    );
  });

});