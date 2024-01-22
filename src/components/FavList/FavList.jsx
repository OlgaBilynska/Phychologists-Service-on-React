import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import PsyCard from '../PsyCard';
import { PsyListWrapper, LoadMoreWrapper } from '../PsyList/PsyList.styled';

import { db } from '../../firebase.js';
import { ref, onValue } from 'firebase/database';
import Button from 'components/Button/index.js';

const FavList = () => {
  const [psychologists, setPsychologists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const psyPerPage = 3;

  const onLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    const favoritesRef = ref(db, 'favorites');

    const startAt = (currentPage - 1) * psyPerPage;

    const query = onValue(favoritesRef, snapshot => {
      const data = snapshot.val();

      if (data) {
        const psychologistsArray = Object.values(data).slice(
          startAt,
          startAt + psyPerPage
        );
        setPsychologists(prevPsychologists => [
          ...prevPsychologists,
          ...psychologistsArray,
        ]);
      }
    });

    return () => query();
  }, [currentPage]);

  return (
    <>
      <PsyListWrapper>
        {psychologists.map(psychologist => (
          <PsyCard psychologist={psychologist} key={nanoid()} />
        ))}

        <LoadMoreWrapper>
          {psychologists.length < 3 ? (
            ''
          ) : (
            <Button
              type="button"
              fontSize={16}
              padding="14px 48px"
              onClick={onLoadMore}
            >
              Load more
            </Button>
          )}
        </LoadMoreWrapper>
      </PsyListWrapper>
    </>
  );
};

export default FavList;
