import { ButtonStyled } from './Button.styled';

const Button = ({
  children,
  color,
  backgroundColor,
  display,
  padding,
  fontSize,
  border,
}) => {
  return (
    <ButtonStyled
      color={color}
      backgroundColor={backgroundColor}
      display={display}
      padding={padding}
      fontSize={fontSize}
      border={border}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
