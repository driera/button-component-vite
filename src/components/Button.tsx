import { styled } from "@stitches/react";

type Props = {
  children?: string;
  is?: "default" | "outline" | "Text";
};

const StyledButton = styled("button", {
  display: "inline-block",
  padding: "16px 32px",
  border: "none",
  fontSize: "18px",
  color: "#222222",
  boxShadow: "2px 2px 2px #00000022",
  borderRadius: "8px",
  background: "#E0E0E0",
  transition: "background 0.15s ease-in"
});

const Button = ({
  children = "Button",
  is = "default"
}: Props): JSX.Element => {
  return (
    <StyledButton
      css={{
        "&:hover": {
          background: "#AEAEAE"
        }
      }}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
