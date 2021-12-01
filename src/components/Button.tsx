import { styled } from "@stitches/react";

const primary_color = "#0067F9";
const gray_color = {
  darkest: "#222222",
  medium: "#9E9E9E",
  light: "#AEAEAE",
  lighter: "#E0E0E0"
} as const;

const BaseButton = styled("button", {
  display: "block",
  padding: "16px 32px",
  border: "none",
  fontSize: "18px",
  color: gray_color.darkest,
  borderRadius: "8px",
  transition: "background 0.15s ease-in",
  outline: "none",

  "&[disabled]": {
    color: gray_color.medium,
    cursor: "not-allowed"
  }
});

const DefaultButton = styled(BaseButton, {
  boxShadow: "2px 2px 2px #00000022",
  background: gray_color.lighter,

  "&:hover, &:focus": {
    "&:not([disabled])": {
      background: gray_color.light
    }
  },

  variants: {
    disableShadow: {
      true: {
        boxShadow: "none"
      }
    }
  }
});

const TextButton = styled(BaseButton, {
  color: primary_color,
  background: "transparent",

  "&:hover, &:focus": {
    "&:not([disabled])": {
      background: "#0067F933"
    }
  },

  variants: {
    disabled: {
      true: {
        "&:hover, &:focus": {
          background: "transparent"
        }
      }
    }
  }
});

const OutlineButton = styled(TextButton, {
  border: `2px solid ${primary_color}`,

  "&:disabled": {
    border: "none"
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
  if (variant === "text") {
    return <TextButton>{children}</TextButton>;
  }

  if (variant === "outline") {
    return <OutlineButton>{children}</OutlineButton>;
  }

  return (
    <DefaultButton disableShadow={disableShadow} disabled={disabled}>
      {children}
    </DefaultButton>
  );
};

export default Button;
