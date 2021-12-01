import { styled } from "../theme";

const BaseButton = styled("button", {
  display: "block",
  padding: "16px 32px",
  border: "none",
  fontSize: "18px",
  color: "$gray_darkest",
  borderRadius: "8px",
  transition: "background 0.15s ease-in",
  outline: "none",

  "&[disabled]": {
    color: "$gray_medium",
    cursor: "not-allowed"
  }
});

const DefaultButton = styled(BaseButton, {
  boxShadow: "2px 2px 2px #00000022",
  background: "$gray_lighter",

  "&:hover, &:focus": {
    "&:not([disabled])": {
      background: "$gray_light"
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
  color: "$primary",
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
  border: `2px solid $primary`,

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
