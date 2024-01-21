import { signOut } from '@firebase/auth';
import { auth } from '../../firebase';
import { ButtonStyled } from 'components/Button/Button.styled';

const LogoutBtn = () => {
  const onLogOutClick = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ButtonStyled
      backgroundcolor="transparent"
      border="rgba(25, 26, 21, 0.20)"
      color="var(--color-text)"
      fontSize="16px"
      type="submit"
      onClick={onLogOutClick}
    >
      Logout
    </ButtonStyled>
  );
};

export default LogoutBtn;
