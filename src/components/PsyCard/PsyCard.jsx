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
  ReadMoreText,
  HeartIconStyled,
  HeartWrapper,
} from './PsyCard.styled';
import sprite from '../../assets/sprite.svg';
import { useState } from 'react';
import Reviews from 'components/Reviews/Reviews';

const PsyCard = ({ psychologist, onHeartClick }) => {
  const {
    about,
    avatar_url,
    experience,
    initial_consultation,
    license,
    name,
    price_per_hour,
    rating,
    specialization,
    id,
  } = psychologist;

  const [fullInfo, setFullInfo] = useState(false);

  return (
    <>
      <CardWrapper>
        <ImgWrapper>
          <ImgPsy alt="psychologist" src={avatar_url} />
          <OnlineCircleBig></OnlineCircleBig>
        </ImgWrapper>
        <ContentWrapper>
          <JobRatingBlock>
            <JobBlock>
              <JobTitle>Psychologist</JobTitle>
              <NameText>{name}</NameText>
            </JobBlock>
            <RatingPriceBlock>
              <RatingBlock>
                <StarSvg>
                  <use href={`${sprite}#icon-star`} />
                </StarSvg>
                <RatingText>Rating: {rating}</RatingText>
              </RatingBlock>

              <PriceText>
                Price / 1 hour:{' '}
                <PriceAccentText>{price_per_hour}$</PriceAccentText>
              </PriceText>

              {/* {isFavoritePsy ? (
                <HeartWrapper
                  onClick={() => {
                    onHeartClick(id);
                  }}
                >
                  <HeartIconStyled>
                    <use href={`${sprite}#icon-active`} />
                  </HeartIconStyled>
                </HeartWrapper>
              ) : (
                <HeartWrapper
                  onClick={() => {
                    onHeartClick(id);
                  }}
                >
                  <HeartSvg onClick={() => onHeartClick(id)}>
                    <use href={`${sprite}#icon-heart`} />
                  </HeartSvg>
                </HeartWrapper>
              )} */}

              <HeartSvg onClick={() => onHeartClick(id)}>
                <use href={`${sprite}#icon-heart`} />
              </HeartSvg>
            </RatingPriceBlock>
          </JobRatingBlock>

          <CategoryWrapper>
            <CategoryText>
              Experience: <CategoryValue>{experience}</CategoryValue>
            </CategoryText>
            <CategoryText>
              License: <CategoryValue>{license}</CategoryValue>
            </CategoryText>
            <CategoryText>
              Specialization: <CategoryValue>{specialization}</CategoryValue>
            </CategoryText>
            <CategoryText>
              Initial_consultation:{' '}
              <CategoryValue>{initial_consultation}</CategoryValue>
            </CategoryText>
          </CategoryWrapper>

          <DescriptionText>{about}</DescriptionText>

          {fullInfo ? (
            <Reviews psychologist={psychologist} />
          ) : (
            <ReadMoreText
              onClick={() => {
                setFullInfo(true);
              }}
            >
              Read more
            </ReadMoreText>
          )}
        </ContentWrapper>
      </CardWrapper>
    </>
  );
};

export default PsyCard;
