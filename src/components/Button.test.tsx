import { render, screen } from "@testing-library/react";

import Button from "./Button";

it("should render", () => {
  render(<Button />);

  expect(screen.getByRole("button", { name: /button/i })).toBeInTheDocument();
});
