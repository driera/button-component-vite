import { createStitches } from "@stitches/react";

const { styled, theme } = createStitches({
  theme: {
    colors: {
      primary: "#0067F9",
      dark: "#000000",
      gray_darkest: "#222222",
      gray_medium: "#9E9E9E",
      gray_light: "#AEAEAE",
      gray_lighter: "#E0E0E0",
      light: "#FFFFFF"
    }
  }
});

export { styled, theme };
