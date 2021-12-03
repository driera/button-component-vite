import { styled } from "../theme";
import Icon from "./Icon";
import { IconsLibrary } from "./icons/iconsLibrary";

const BaseButton = styled("button", {
  display: "grid",
  gridAutoFlow: "column",
  alignItems: "center",
  gap: 4,
  padding: "0.85em 1.35em",
  border: "none",
  color: "$gray_darkest",
  borderRadius: "8px",
  transition: "background 0.15s ease-in",
  outline: "none",

  "&[disabled]": {
    color: "$gray_medium",
    background: "$gray_lighter",
    cursor: "not-allowed"
  },

  "& svg": {
    width: "1.15em",
    height: "1.15em"
  },

  variants: {
    size: {
      sm: {
        fontSize: "16px"
      },
      md: {
        fontSize: "18px"
      },
      lg: {
        fontSize: "20px"
      }
    }
  }
});

const DefaultButton = styled(BaseButton, {
  boxShadow: "2px 2px 2px #00000022",

  variants: {
    disableShadow: {
      true: {
        boxShadow: "none"
      }
    },
    color: {
      default: {
        background: "$gray_lighter",

        "&:hover, &:focus": {
          "&:not([disabled])": {
            background: "$gray_light"
          }
        }
      },
      primary: {
        color: "$light",
        background: "$primary",

        "&:hover, &:focus": {
          "&:not([disabled])": {
            background: "$primary_dark"
          }
        }
      },
      secondary: {
        color: "$light",
        background: "$secondary",

        "&:hover, &:focus": {
          "&:not([disabled])": {
            background: "$secondary_dark"
          }
        }
      },
      danger: {
        color: "$light",
        background: "$danger",

        "&:hover, &:focus": {
          "&:not([disabled])": {
            background: "$danger_dark"
          }
        }
      }
    }
  }
});

const TextButton = styled(BaseButton, {
  background: "transparent",

  variants: {
    color: {
      default: {
        color: "$gray_darkest",

        "&:hover, &:focus": {
          "&:not([disabled])": {
            background: "$gray_transparent"
          }
        }
      },
      primary: {
        color: "$primary",

        "&:hover, &:focus": {
          "&:not([disabled])": {
            background: "$primary_transparent"
          }
        }
      },
      secondary: {
        color: "$secondary",

        "&:hover, &:focus": {
          "&:not([disabled])": {
            background: "$secondary_transparent"
          }
        }
      },
      danger: {
        color: "$danger",

        "&:hover, &:focus": {
          "&:not([disabled])": {
            background: "$danger_transparent"
          }
        }
      }
    }
  }
});

const OutlineButton = styled(TextButton, {
  border: `2px solid currentColor`,

  "&:disabled": {
    border: "none"
  }
});

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "outline" | "text" | undefined;
  disableShadow?: boolean;
  disabled?: boolean;
  startIcon?: keyof IconsLibrary;
  endIcon?: keyof IconsLibrary;
  size?: "sm" | "md" | "lg";
  color?: "default" | "primary" | "secondary" | "danger";
};

const Button = ({
  variant,
  disableShadow = false,
  disabled = false,
  startIcon,
  endIcon,
  size = "md",
  color = "default",
  children,
  ...rest
}: Props): JSX.Element => {
  if (variant === "text") {
    return (
      <TextButton size={size} color={color} {...rest}>
        {startIcon && <Icon icon={startIcon} />}
        {children}
        {endIcon && <Icon icon={endIcon} />}
      </TextButton>
    );
  }

  if (variant === "outline") {
    return (
      <OutlineButton size={size} color={color} {...rest}>
        {startIcon && <Icon icon={startIcon} />}
        {children}
        {endIcon && <Icon icon={endIcon} />}
      </OutlineButton>
    );
  }

  return (
    <DefaultButton
      disableShadow={disableShadow}
      disabled={disabled}
      size={size}
      color={color}
      {...rest}
    >
      {startIcon && <Icon icon={startIcon} />}
      {children}
      {endIcon && <Icon icon={endIcon} />}
    </DefaultButton>
  );
};

export default Button;
