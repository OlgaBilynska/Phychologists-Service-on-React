import { ButtonStyled } from './Button.styled';

const Button = ({
  children,
  color,
  backgroundColor,
  display,
  padding,
  fontSize,
  border,
  type,
  width,
}) => {
  return (
    <ButtonStyled
      color={color}
      backgroundColor={backgroundColor}
      display={display}
      padding={padding}
      fontSize={fontSize}
      border={border}
      type={type}
      width={width}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
