import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("button", () => {
  it("should render", () => {
    render(<Button>My button</Button>);

    const defaultButton = screen.getByRole("button", { name: /button/i });
    expect(defaultButton).toBeInTheDocument();
  });

  it("can be disabled", () => {
    render(<Button disabled>My button</Button>);

    const defaultButton = screen.getByRole("button", { name: /button/i });
    expect(defaultButton).toBeDisabled();
  });

  it("can have icons", () => {
    render(<Button startIcon="anchor">My button</Button>);

    const anchorIcon = screen.getByRole("img", { name: "anchor" });
    expect(anchorIcon).toBeInTheDocument();
  });

  it("can have any HTML button property", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    render(<button onClick={() => console.log("Click!")}>My button</button>);

    const button = screen.getByRole("button", { name: "My button" });
    fireEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(console.log).toHaveBeenCalledWith("Click!");
    consoleSpy.mockRestore();
  });
});
