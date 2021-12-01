import { globalCss } from "@stitches/react";

const globalStyles = globalCss({
  "@import": [
    "https://cdn.jsdelivr.net/gh/jgthms/minireset.css@master/minireset.min.css",
    "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700&display=swap"
  ],
  body: {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: "16px",
    lineHeight: 1.5,
    WebkitFontSmoothing: "antialiased"
  },
  "h1, h2, h3, h4, h5": { fontWeight: "bold", marginBottom: "0.5em" },
  p: { marginBottom: "0.5em" },
  h1: { fontSize: "36px" },
  h2: { fontSize: "32px" },
  h3: { fontSize: "28px" },
  h4: { fontSize: "24px" },
  h5: { fontSize: "20px" },
  "a, button": { cursor: "pointer" }
});

export default globalStyles;
