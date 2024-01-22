import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAuth, signInWithPopup } from 'firebase/auth';
import LogoutBtn from 'components/LogoutBtn';
import { app, googleAuthProvider } from '../../firebase';
import { AuthBlock, IconUser, AuthText, AuthLogoutBlock } from './Auth.styled';
import sprite from '../../assets/sprite.svg';

const AuthProvider = ({ onAuthStateChanged }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);

  console.log('email', auth?.currentUser?.email);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(maybeUser => {
      if (maybeUser === null) {
        setUser(maybeUser);

        if (onAuthStateChanged) {
          onAuthStateChanged(false);
        }
      } else {
        signInWithPopup(auth, googleAuthProvider)
          .then(credentials => {
            setUser(credentials.user);
            if (onAuthStateChanged) {
              onAuthStateChanged(true);
            }
          })
          .catch(e => console.error(e));
      }
    });

    return unsub;
  }, [auth, onAuthStateChanged]);

  return user !== null ? (
    <AuthLogoutBlock>
      <AuthBlock>
        <IconUser>
          <use href={`${sprite}#icon-user`} />
        </IconUser>
        <AuthText> {user.displayName}</AuthText>
      </AuthBlock>
      <LogoutBtn />
    </AuthLogoutBlock>
  ) : null;
};

export default AuthProvider;
