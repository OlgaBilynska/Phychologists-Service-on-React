import image from '../../assets/psy-img.jpg';

import {
  CardWrapper,
  ImgPsy,
  ImgWrapper,
  JobTitle,
  NameText,
  JobBlock,
  CategoryText,
  CategoryValue,
  CategoryWrapper,
  DescriptionText,
  RatingText,
  PriceText,
  PriceAccentText,
  RatingPriceBlock,
  ContentWrapper,
  JobRatingBlock,
  StarSvg,
  HeartSvg,
  RatingBlock,
  OnlineCircleBig,
} from './PsyCard.styled';
import sprite from '../../assets/sprite.svg';

const PsyCard = ({ psychologist, index }) => {
  console.log('psy');
  return (
    <CardWrapper>
      <ImgWrapper>
        <ImgPsy alt="psychologist" src={image} />
        <OnlineCircleBig>
          <div></div>
        </OnlineCircleBig>
      </ImgWrapper>
      <ContentWrapper>
        <JobRatingBlock>
          <JobBlock>
            <JobTitle>Psychologist</JobTitle>
            <NameText>Dr. Sarah Davis</NameText>
          </JobBlock>
          <RatingPriceBlock>
            <RatingBlock>
              <StarSvg>
                <use href={`${sprite}#icon-star`} />
              </StarSvg>
              <RatingText>Rating:</RatingText>
            </RatingBlock>

            <PriceText>
              Price / 1 hour: <PriceAccentText>120$</PriceAccentText>
            </PriceText>
            <HeartSvg>
              <use href={`${sprite}#icon-heart`} />
            </HeartSvg>
          </RatingPriceBlock>
        </JobRatingBlock>

        <CategoryWrapper>
          <CategoryText>
            Experience: <CategoryValue>12 years</CategoryValue>
          </CategoryText>
          <CategoryText>
            License:{' '}
            <CategoryValue>
              Licensed Psychologist (License #67890)
            </CategoryValue>
          </CategoryText>
          <CategoryText>
            Specialization:{' '}
            <CategoryValue>Depression and Mood Disorders</CategoryValue>
          </CategoryText>
          <CategoryText>
            Initial_consultation:{' '}
            <CategoryValue>Free 45-minute initial consultation</CategoryValue>
          </CategoryText>
        </CategoryWrapper>

        <DescriptionText>
          Dr. Sarah Davis is a highly experienced and licensed psychologist
          specializing in Depression and Mood Disorders. With 12 years of
          practice, she has helped numerous individuals overcome their
          depression and regain control of their lives. Dr. Davis is known for
          her empathetic and understanding approach to therapy, making her
          clients feel comfortable and supported throughout their journey to
          better mental health.
        </DescriptionText>
      </ContentWrapper>
    </CardWrapper>
  );
};

export default PsyCard;
