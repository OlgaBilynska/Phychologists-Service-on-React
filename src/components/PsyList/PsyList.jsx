import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import PsyCard from 'components/PsyCard';
import { PsyListWrapper, LoadMoreWrapper } from './PsyList.styled.js';

import { db } from '../../firebase.js';
import { ref, onValue } from 'firebase/database';
import Button from 'components/Button/index.js';

const PsyList = () => {
  const [psychologists, setPsychologists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const psyPerPage = 3;

  // const [clickedPsyId, setClickedPsyId] = useState(null);
  const [favoritesPsy, setFavoritePsy] = useState([]);

  useEffect(() => {
    const favoritesRef = ref(db, 'favorites');
    const query = onValue(favoritesRef, snapshot => {
      const data = snapshot.val();
      if (data) {
        const favoritesArray = Object.values(data);
        setFavoritePsy(favoritesArray);
      }
    });

    return () => {
      query();
    };
  }, []);

  const isFavoritePsy = psyId => {
    return favoritesPsy.find(psy => psy.id === psyId);
  };

  const addToFavorites = psychologist => {
    return [...favoritesPsy, psychologist];
  };

  const deleteFromFavorites = psyId => {
    const index = favoritesPsy.findIndex(
      favoritePsy => favoritePsy.id === favoritePsy.psyId
    );
    const updatedFavortes = favoritesPsy.splice(index, 1);
    setFavoritePsy(updatedFavortes);
  };

  const toggleIcon = psyId => {
    const foundFavPsy = psychologists.find(psy => psy.id === psyId);

    if (foundFavPsy) {
      deleteFromFavorites(foundFavPsy.id);
    } else {
      const chosenFavPsy = favoritesPsy.find(psy => psy.id === psyId);
      addToFavorites(chosenFavPsy);
    }
  };

  const onHeartClick = psyId => {
    // setClickedPsyId(psyId);
    toggleIcon(psyId);
    isFavoritePsy(psyId);
  };

  const onLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    const psychologistsRef = ref(db, 'psycologists');

    const startAt = (currentPage - 1) * psyPerPage;

    const query = onValue(psychologistsRef, snapshot => {
      const data = snapshot.val();

      if (data) {
        const psychologistsArray = Object.values(data)
          .slice(startAt, startAt + psyPerPage)
          .map(psychologist => ({
            id: nanoid(),
            ...psychologist,
          }));
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
          <PsyCard
            psychologist={psychologist}
            key={psychologist.id}
            onHeartClick={onHeartClick}
            isFavoritePsy={isFavoritePsy}
          />
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

export default PsyList;
