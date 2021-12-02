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
  startIcon?: keyof IconsLibrary;
  endIcon?: keyof IconsLibrary;
  size?: "sm" | "md" | "lg";
};

const Button = ({
  children = "Button",
  variant,
  disableShadow = false,
  disabled = false,
  startIcon,
  endIcon,
  size = "md"
}: Props): JSX.Element => {
  if (variant === "text") {
    return (
      <TextButton size={size}>
        {startIcon && <Icon icon={startIcon} />}
        {children}
        {endIcon && <Icon icon={endIcon} />}
      </TextButton>
    );
  }

  if (variant === "outline") {
    return (
      <OutlineButton size={size}>
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
    >
      {startIcon && <Icon icon={startIcon} />}
      {children}
      {endIcon && <Icon icon={endIcon} />}
    </DefaultButton>
  );
};

export default Button;
