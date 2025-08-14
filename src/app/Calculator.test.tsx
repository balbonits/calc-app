import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "./Calculator";

// Helper to click buttons by text
const click = (text: string) => {
  fireEvent.click(screen.getByText(text));
};

describe("Calculator Error Handling & Edge Cases", () => {
  test("prevents multiple consecutive operators", () => {
    render(<Calculator />);
    click("2");
    click("+");
    click("+");
    expect(screen.getByTestId("display").textContent).toBe("2+");
  });

  test("allows only one decimal per number", () => {
    render(<Calculator />);
    click("3");
    click(".");
    click(".");
    expect(screen.getByTestId("display").textContent).toBe("3.");
    click("+");
    click("4");
    click(".");
    click(".");
    expect(screen.getByTestId("display").textContent).toBe("3.+4.");
  });

  test("shows 'Error' for division by zero", () => {
    render(<Calculator />);
    click("8");
    click("/");
    click("0");
    click("=");
    expect(screen.getByTestId("display").textContent).toMatch(/error/i);
  });

  test("shows 'Error' for invalid expressions", () => {
    render(<Calculator />);
    click("+");
    click("=");
    expect(screen.getByTestId("display").textContent).toMatch(/error/i);
  });
});
