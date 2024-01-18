import sprite from '../../assets/sprite.svg';
import { StarSvg } from 'components/PsyCard/PsyCard.styled';
import {
  DescriptionText,
  RatingBlock,
} from 'components/PsyCard/PsyCard.styled';
import {
  NameRatingBlock,
  ReviewBlock,
  CircleName,
  CircleAndInfo,
  FirstLetter,
} from './ReviewsCard.styled';

export const ReviewsCard = ({ review }) => {
  const { comment, rating, reviewer } = review;
  const firstLetter = reviewer.split('')[0];
  const fullRating = rating.toFixed(1);

  return (
    <ReviewBlock>
      <CircleAndInfo>
        <CircleName>
          <FirstLetter>{firstLetter}</FirstLetter>
        </CircleName>
        <NameRatingBlock>
          <p>{reviewer}</p>
          <RatingBlock>
            <StarSvg>
              <use href={`${sprite}#icon-star`} />
            </StarSvg>
            <p>{fullRating}</p>
          </RatingBlock>
        </NameRatingBlock>
      </CircleAndInfo>

      <DescriptionText>{comment}</DescriptionText>
    </ReviewBlock>
  );
};

export default ReviewsCard;
