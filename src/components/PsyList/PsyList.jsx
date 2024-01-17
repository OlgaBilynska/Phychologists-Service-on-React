import { useEffect, useState } from 'react';
import PsyCard from 'components/PsyCard';

import { db } from '../../firebase.js';
import { get, ref, onValue, getDatabase } from 'firebase/database';

const PsyList = () => {
  const [psychologists, setPsychologists] = useState([]);
  console.log('🚀 ~ file: PsyList.jsx:9 ~ psychologists:', psychologists);

  useEffect(() => {
    const psychologistsRef = ref(db, 'psychologists');

    const unsubscribe = onValue(psychologistsRef, snapshot => {
      const data = snapshot.val();

      if (data) {
        const psychologistsArray = Object.values(data);
        setPsychologists(psychologistsArray);
      }
    });

    return () => unsubscribe();
  }, []);

  // useEffect(() => {
  //   const query = ref(db, 'psychologists');
  //   console.log('query:', query);
  //   return onValue(query, snapshot => {
  //     const data = snapshot.val();
  //     console.log('onValue :>> ');
  //     if (snapshot.exists()) {
  //       console.log('object :>> ');
  //       const psychologistsArray = Object.values(data);
  //       setPsychologists(psychologistsArray);
  //     }
  //   });
  // }, []);

  return (
    <div>
      {psychologists.map((psychologist, index) => (
        <PsyCard psychologist={psychologist} key={index} />
      ))}
    </div>
  );
};

export default PsyList;
