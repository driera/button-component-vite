import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("should show hello world", () => {
    render(<App />);

    const title = screen.getByText("Button component");
    expect(title).toBeInTheDocument();
  });
});
