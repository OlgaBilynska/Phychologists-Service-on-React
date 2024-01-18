import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import PsyCard from 'components/PsyCard';
import { PsyListWrapper, LoadMoreWrapper } from './PsyList.styled.js';

import { db } from '../../firebase.js';
import { ref, onValue } from 'firebase/database';
import Button from 'components/Button/index.js';
// import { selectPsychologists } from '../../redux/selectors.js';

const PsyList = () => {
  const [psychologists, setPsychologists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const psyPerPage = 3;

  // const psychologistsList = useSelector(selectPsychologists);
  // console.log('psy', psychologistsList);

  const onLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    const psychologistsRef = ref(db, 'psycologists');
    const startAt = (currentPage - 1) * psyPerPage;
    const endAt = startAt + psyPerPage;

    const unsubscribe = onValue(psychologistsRef, snapshot => {
      const data = snapshot.val();

      if (data) {
        const psychologistsArray = Object.values(data).slice(startAt, endAt);
        setPsychologists(psychologistsArray);
      }
    });

    return () => unsubscribe();
  }, [currentPage]);

  return (
    <>
      <PsyListWrapper>
        {psychologists.map(psychologist => (
          <PsyCard psychologist={psychologist} key={nanoid()} />
        ))}

        <LoadMoreWrapper>
          <Button
            type="button"
            fontSize={16}
            padding="14px 48px"
            onClick={onLoadMore}
          >
            Load more
          </Button>
        </LoadMoreWrapper>
      </PsyListWrapper>
    </>
  );
};

export default PsyList;
