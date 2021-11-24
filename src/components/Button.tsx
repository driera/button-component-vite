import styled from "styled-components";

const primary_color = "#0067F9";

type BaseButtonProps = { disableShadow?: boolean };

const BaseButton = styled.button(({ disableShadow }: BaseButtonProps) => ({
  display: "block",
  padding: "16px 32px",
  border: "none",
  fontSize: "18px",
  color: "#222222",
  boxShadow: disableShadow ? "none" : "2px 2px 2px #00000022",
  borderRadius: "8px",
  transition: "background 0.15s ease-in",
  outline: "none"
}));

const DefaultButton = styled(BaseButton)({
  background: "#E0E0E0",

  "&:hover, &:focus": {
    background: "#AEAEAE"
  }
});

const OutlineButton = styled(BaseButton)({
  color: primary_color,
  background: "transparent",
  boxShadow: "none",
  border: `2px solid ${primary_color}`,

  "&:hover, &:focus": {
    background: "#0067F933"
  }
});

const TextButton = styled(BaseButton)({
  color: primary_color,
  background: "transparent",
  boxShadow: "none",

  "&:hover, &:focus": {
    background: "#0067F933"
  }
});

type Props = {
  children?: string;
  variant?: "outline" | "text" | undefined;
  disableShadow?: boolean;
};

const Button = ({
  children = "Button",
  variant,
  disableShadow = false
}: Props): JSX.Element => {
  if (variant === "outline") {
    return <OutlineButton>{children}</OutlineButton>;
  }
  if (variant === "text") {
    return <TextButton>{children}</TextButton>;
  }
  return (
    <DefaultButton disableShadow={disableShadow}>{children}</DefaultButton>
  );
};

export default Button;
