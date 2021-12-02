import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("button", () => {
  it("should render", () => {
    render(<Button />);

    const defaultButton = screen.getByRole("button", { name: /button/i });
    expect(defaultButton).toBeInTheDocument();
  });

  it("can be disabled", () => {
    render(<Button disabled />);

    const defaultButton = screen.getByRole("button", { name: /button/i });
    expect(defaultButton).toBeDisabled();
  });

  it("can have icons", () => {
    render(<Button startIcon="anchor" />);

    const anchorIcon = screen.getByRole("img", { name: "anchor" });
    expect(anchorIcon).toBeInTheDocument();
  });
});
