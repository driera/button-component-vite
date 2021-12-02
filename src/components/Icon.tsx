import iconsLibrary, { IconsLibrary } from "./icons/iconsLibrary";

type IconProps = {
  icon: keyof IconsLibrary;
  color?: string;
};

const Icon = ({ icon, color = "currentColor" }: IconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      role="img"
      aria-label={icon}
    >
      <path d={iconsLibrary[icon]} />
    </svg>
  );
};

export default Icon;
