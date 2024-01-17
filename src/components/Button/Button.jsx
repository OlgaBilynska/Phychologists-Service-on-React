import { ButtonStyled } from './Button.styled';

const Button = ({
  children,
  color,
  backgroundcolor,
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
      backgroundcolor={backgroundcolor}
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
