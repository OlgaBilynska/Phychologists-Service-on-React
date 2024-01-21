import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import PsyCard from 'components/PsyCard';
import { PsyListWrapper, LoadMoreWrapper } from './PsyList.styled.js';

import { db } from '../../firebase.js';
import { ref, onValue } from 'firebase/database';
import Button from 'components/Button/index.js';
// import {
// collection,
// query,
// orderBy,
//   startAfter,
//   limit,
//   getDocs,
// } from 'firebase/firestore';
// import { selectPsychologists } from '../../redux/selectors.js';

const PsyList = () => {
  const [psychologists, setPsychologists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const psyPerPage = 3;

  //start the example

  // const [list, setList] = useState([]);
  // const [page, setPage] = useState(1);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await fireBaseConfig
  //       .firestore()
  //       .collection('psycologists')
  //       // .orderBy('created', 'desc')
  //       // .limit(4)
  //       .onSnapshot(function (querySnapshot) {
  //         var items = [];
  //         querySnapshot.forEach(function (doc) {
  //           items.push({ key: nanoid(), ...doc.data() });
  //         });
  //         console.log('first item ', items[0]);
  //         setPsychologists(items);
  //       });
  //   };
  //   fetchData();
  // }, []);

  const showNext = ({ item }) => {
    // if (psychologists.length === 0) {
    //   alert('Thats all we have for now !');
    // } else {
    //   const fetchNextData = async () => {
    //     await fireBaseConfig
    //       .firestore()
    //       .collection('psycologists')
    //       // .orderBy('created', 'desc')
    //       .limit(5)
    //       .startAfter(item.created)
    //       .onSnapshot(function (querySnapshot) {
    //         const items = [];
    //         querySnapshot.forEach(function (doc) {
    //           items.push({ key: nanoid(), ...doc.data() });
    //         });
    //         setPsychologists(items);
    //         setCurrentPage(currentPage + 1);
    //       });
    //   };
    //   fetchNextData();
    // }
  };

  //finish

  const onLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    const psychologistsRef = ref(db, 'psycologists');

    // const queryRef = query(psychologistsRef);
    // console.log('q', queryRef);

    // const myQuery = psychologistsRef.limit(4);

    // const first = query(collection(db, 'psycologists'), limit(25));
    // const documentSnapshots = async () => {
    //   await getDocs(first);
    // };

    // const lastVisible =
    //   documentSnapshots.docs[documentSnapshots.docs.length - 1];
    // console.log('last', lastVisible);

    // const next = query(
    //   collection(db, 'psycologists'),
    //   startAfter(lastVisible),
    //   limit(25)
    // );

    const startAt = (currentPage - 1) * psyPerPage;
    // const endAt = startAt + psyPerPage;

    const query = onValue(psychologistsRef, snapshot => {
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
              onClick={() =>
                showNext({ item: psychologists[psychologists.length - 1] })
              }
            >
              Next
            </Button>
          )}

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
