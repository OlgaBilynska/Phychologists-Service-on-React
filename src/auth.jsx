// import { useEffect, useState } from 'react';
// import {
//   getAuth,
//   signInWithPopup,
//   createUserWithEmailAndPassword,
// } from 'firebase/auth';
// import { app, googleAuthProvider } from './firebase';

// export const GoogleAuthProvider = ({ values }) => {
//   const auth = getAuth(app);
//   const [user, setUser] = useState(auth.currentUser);

//   useEffect(() => {
//     const unsub = auth.onAuthStateChanged(maybeUser => {
//       if (maybeUser == null) {
//         return setUser(maybeUser);
//       }

//       signInWithPopup(auth, googleAuthProvider).then(credentials => {
//         setUser(credentials.user).catch(e => console.error(e));
//       });

//       createUserWithEmailAndPassword(auth, values.email, values.password).then(
//         credentials => {
//           console.log('cre', credentials).catch(e => console.error(e));
//         }
//       );
//     });

//     return unsub;
//   }, [auth, values]);

//   return user != null ? (
//     <>
//       <AuthBlock>
//         <IconUser>
//           <use href={`${sprite}#icon-user`} />
//         </IconUser>
//         <AuthText>
//           <AuthProvider />
//         </AuthText>
//       </AuthBlock>
//       {user.displayName}
//     </>
//   ) : null;
// };
