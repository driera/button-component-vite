import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("button", () => {
  it("should render", () => {
    render(<Button />);

    const defaultButton = screen.getByRole("button", { name: /button/i });
    expect(defaultButton).toBeInTheDocument();
  });

  it("has an outline variant", () => {
    render(<Button variant="outline" />);

    const outlineButton = screen.getByRole("button", { name: /button/i });
    expect(outlineButton).toHaveStyle({
      color: "#0067F9",
      border: "2px solid #0067F9"
    });
  });

  it("has a text variant", () => {
    render(<Button variant="text" />);

    const textButton = screen.getByRole("button", { name: /button/i });
    expect(textButton).toHaveStyle({
      color: "#0067F9",
      background: "transparent",
      border: "none"
    });
  });
});
