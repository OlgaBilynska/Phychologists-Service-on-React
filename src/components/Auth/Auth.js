import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAuth, signInWithPopup } from 'firebase/auth';
import LogoutBtn from 'components/LogoutBtn';
import { app, googleAuthProvider } from '../../firebase';
import { AuthBlock, IconUser, AuthText, AuthLogoutBlock } from './Auth.styled';
import sprite from '../../assets/sprite.svg';
import { selectUserData } from '../../redux/selectors';

const AuthProvider = ({ onAuthStateChanged }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);

  const userInfo = useSelector(selectUserData);
  console.log('userInfo', userInfo);

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

        // createUserWithEmailAndPassword(auth, values.email, values.password)
        //   .then(credentials => {
        //     console.log('cre', credentials);
        //   })
        //   .catch(e => console.error(e));
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
