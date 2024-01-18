import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import PsyCard from 'components/PsyCard';
import { PsyListWrapper } from './PsyList.styled.js';

import { db } from '../../firebase.js';
import { ref, onValue } from 'firebase/database';

const PsyList = () => {
  const [psychologists, setPsychologists] = useState([]);
  console.log('🚀 ~ file: PsyList.jsx:9 ~ psychologists:', psychologists);

  useEffect(() => {
    const psychologistsRef = ref(db, 'psycologists');

    const unsubscribe = onValue(psychologistsRef, snapshot => {
      const data = snapshot.val();

      if (data) {
        const psychologistsArray = Object.values(data);
        setPsychologists(psychologistsArray);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <PsyListWrapper>
      {psychologists.map(psychologist => (
        <PsyCard psychologist={psychologist} key={nanoid()} />
      ))}
    </PsyListWrapper>
  );
};

export default PsyList;
