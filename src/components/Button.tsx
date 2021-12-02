import { styled } from "../theme";
import Icon from "./Icon";
import { IconsLibrary } from "./icons/iconsLibrary";

const BaseButton = styled("button", {
  display: "grid",
  gridAutoFlow: "column",
  alignItems: "center",
  gap: 4,
  padding: "16px 24px",
  border: "none",
  fontSize: "18px",
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
  startIcon?: keyof IconsLibrary;
  endIcon?: keyof IconsLibrary;
};

const Button = ({
  children = "Button",
  variant,
  disableShadow = false,
  disabled = false,
  startIcon,
  endIcon
}: Props): JSX.Element => {
  if (variant === "text") {
    return (
      <TextButton>
        {startIcon && <Icon icon={startIcon} />}
        {children}
        {endIcon && <Icon icon={endIcon} />}
      </TextButton>
    );
  }

  if (variant === "outline") {
    return (
      <OutlineButton>
        {startIcon && <Icon icon={startIcon} />}
        {children}
        {endIcon && <Icon icon={endIcon} />}
      </OutlineButton>
    );
  }

  return (
    <DefaultButton disableShadow={disableShadow} disabled={disabled}>
      {startIcon && <Icon icon={startIcon} />}
      {children}
      {endIcon && <Icon icon={endIcon} />}
    </DefaultButton>
  );
};

export default Button;
