import { nanoid } from 'nanoid';
import { useState } from 'react';
import Button from 'components/Button';
import ReviewsCard from 'components/ReviewsCard';
import { ReviewsBlock } from './Reviews.styled';
import PopUpWindow from 'components/PopUpWindow';
import Appointment from 'components/Appointment';

const Reviews = ({ psychologist }) => {
  const { reviews } = psychologist;

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    console.log('toggle');
    setShowModal(prevState => !prevState);
  };

  return (
    <>
      <ReviewsBlock>
        {reviews.map(review => (
          <li>
            <ReviewsCard review={review} key={nanoid()} />
          </li>
        ))}
      </ReviewsBlock>

      <div onClick={() => toggleModal()}>
        <Button fontSize={16} padding="14px 32px">
          Make an appointment
        </Button>
      </div>

      {showModal && (
        <PopUpWindow onClick={toggleModal}>
          <Appointment psychologist={psychologist} />
        </PopUpWindow>
      )}
    </>
  );
};

export default Reviews;
