import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth';
import LogoutBtn from 'components/LogoutBtn';
import { app, googleAuthProvider } from '../../firebase';
import { AuthBlock, IconUser, AuthText, AuthLogoutBlock } from './Auth.styled';
import sprite from '../../assets/sprite.svg';

const AuthProvider = ({ onAuthStateChanged }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);

  console.log('user', user);

  onAuthStateChanged(auth, user => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log('uid :>> ', uid);
      // ...
    } else {
      // User is signed out
      console.log('no user');
      // ...
    }
  });

  // useEffect(() => {
  //   const unsub = auth.onAuthStateChanged(maybeUser => {
  //     if (maybeUser === null) {
  //       setUser(maybeUser);

  //       if (onAuthStateChanged) {
  //         onAuthStateChanged(false);
  //       }
  //     } else {
  //       signInWithPopup(auth, googleAuthProvider)
  //         .then(credentials => {
  //           setUser(credentials.user);
  //           console.log('uid', credentials.user.uid);
  //           if (onAuthStateChanged) {
  //             onAuthStateChanged(true);
  //           }
  //         })
  //         .catch(e => console.error(e));
  //     }
  //   });

  //   return unsub;
  // }, [auth, onAuthStateChanged]);

  return user !== null ? (
    <AuthLogoutBlock user={user}>
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
