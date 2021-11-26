import styled from "styled-components";

const primary_color = "#0067F9";
const gray_color = {
  medium: "#9E9E9E"
} as const;

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
  outline: "none",

  "&&[disabled]": {
    color: gray_color.medium,
    cursor: "not-allowed"
  }
}));

const DefaultButton = styled(BaseButton)({
  background: "#E0E0E0",

  "&:hover, &:focus": {
    "&:not([disabled])": {
      background: "#AEAEAE"
    }
  }
});

const TextButton = styled(BaseButton)({
  color: primary_color,
  background: "transparent",
  boxShadow: "none",

  "&:hover, &:focus": {
    "&:not([disabled])": {
      background: "#0067F933"
    }
  }
});

const OutlineButton = styled(TextButton)({
  border: `2px solid ${primary_color}`,

  "&[disabled]": {
    border: `2px solid ${gray_color.medium}`
  }
});

type Props = {
  children?: string;
  variant?: "outline" | "text" | undefined;
  disableShadow?: boolean;
  disabled?: boolean;
};

const Button = ({
  children = "Button",
  variant,
  disableShadow = false,
  disabled = false
}: Props): JSX.Element => {
  if (variant === "outline") {
    return <OutlineButton disabled={disabled}>{children}</OutlineButton>;
  }
  if (variant === "text") {
    return <TextButton disabled={disabled}>{children}</TextButton>;
  }
  return (
    <DefaultButton disabled={disabled} disableShadow={disableShadow}>
      {children}
    </DefaultButton>
  );
};

export default Button;
