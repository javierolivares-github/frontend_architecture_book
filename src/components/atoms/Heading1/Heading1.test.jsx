import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Heading1 from "./Heading1";

describe("Heading1", () => {

  test("should renders the component, the correct html tag and the text specified", () => {
    render(
      <Heading1>
        This is the Heading1 component.
      </Heading1>
    );
    const headingElement = screen.getByTestId('heading1-container');
    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName).toBe('H1');
    expect(headingElement).toHaveTextContent(
      "This is the Heading1 component."
    );
  });

});