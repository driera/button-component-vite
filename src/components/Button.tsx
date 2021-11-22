import { CSSProperties } from "react";

type Props = {
  children?: string;
  is?: "default" | "outline" | "Text";
};
const Button = ({
  children = "Button",
  is = "default"
}: Props): JSX.Element => {
  const defaultStyles: CSSProperties = {
    display: "inline-block",
    padding: "16px 32px",
    border: "none",
    fontSize: "18px",
    color: "#222222",
    boxShadow: "2px 2px 2px #00000022",
    borderRadius: "8px",
    background: "#E0E0E0"
  };

  return <button style={{ ...defaultStyles }}>{children}</button>;
};

export default Button;
