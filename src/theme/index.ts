import { createStitches } from "@stitches/react";

const { styled, theme } = createStitches({
  theme: {
    colors: {
      primary: "#0067F9",
      primary_dark: "#0046C7",
      primary_transparent: "#0067F933",
      secondary: "#415B63",
      secondary_dark: "#173139",
      secondary_transparent: "#415B6333",
      danger: "#DF2A34",
      danger_dark: "#A30010",
      danger_transparent: "#DF2A3433",
      dark: "#000000",
      gray_darkest: "#222222",
      gray_dark: "#5E5E5E",
      gray_medium: "#9E9E9E",
      gray_light: "#AEAEAE",
      gray_lighter: "#E0E0E0",
      gray_transparent: "#9E9E9E33",
      light: "#FFFFFF"
    }
  }
});

export { styled, theme };
