type Props = {
  children?: string;
};
const Button = ({ children = "Button" }: Props): JSX.Element => {
  return <button>{children}</button>;
};

export default Button;
