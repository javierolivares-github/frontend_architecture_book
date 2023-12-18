import { describe, expect, it, vi } from "vitest";
import Button from "./Button";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Button", () => {

  test("renders Button with correct html tag and label", () => {
    render(
      <Button label="Button" />
    );
    const buttonElement = screen.getByTestId("button-container");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe('BUTTON');
    expect(buttonElement).toHaveTextContent(/button/i);
  });

  test("should disables the button when disabled is present", () => {
    render(
      <Button label="Button" disabled />
    );
    expect(screen.getByTestId("button-container")).toHaveAttribute('disabled')
  });

  test("should calls a callback function when the button is pressed", () => {
    const handleClick = vi.fn();
    render(
      <Button label="Button" onClick={handleClick} />
    );
    fireEvent.click(screen.getByTestId("button-container"));
    expect(handleClick).toHaveBeenCalledOnce();
  });
});