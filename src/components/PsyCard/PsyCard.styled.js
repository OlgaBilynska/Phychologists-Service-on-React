import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  gap: 24px;

  padding: 24px;

  width: 1184px;
  height: 358px;
  border-radius: 24px;
  background-color: #fbfbfb;
`;

export const ImgPsy = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 15px;
`;

export const ImgWrapper = styled.div`
  position: relative;

  width: 120px;
  height: 120px;
  padding: 12px;
  border: 2px solid #fc832c33;
  border-radius: 15px;
`;

export const OnlineCircleBig = styled.div`
  position: absolute;
  top: 9px;
  right: 10px;

  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #38cd3e;

  border: 2px solid #fbfbfb;
`;

export const OnlineSvg = styled.svg`
  position: absolute;
  top: 9px;
  right: 14px;

  width: 14px;
  height: 14px;
  stroke: #fbfbfb;
  fill: #38cd3e;
`;

export const StarSvg = styled.svg`
  width: 16px;
  height: 16px;
  fill: #ffc531;
`;

export const HeartSvg = styled.svg`
  width: 26px;
  height: 26px;
  stroke: var(--color-text);
  fill: var(--color-white);
  margin-left: 28px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const JobRatingBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const JobTitle = styled.p`
  color: #8a8a89;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const NameText = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
`;

export const JobBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const RatingText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  padding-right: 16px;

  ::after {
    content: '';
    border-right: 1px solid red;
  }
`;

export const RatingBlock = styled.div`
  display: flex;
  gap: 8px;
`;

export const PriceText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  padding-left: 16px;
`;

export const PriceAccentText = styled.span`
  color: #38cd3e;
  font-size: 16;
  font-weight: 500;
  line-height: 1.5;
`;

export const RatingPriceBlock = styled.div`
  display: flex;
`;

export const CategoryWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const CategoryText = styled.li`
  padding: 8px 16px;
  background-color: #f3f3f3;
  border-radius: 24px;
  color: #8a8a89;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const CategoryValue = styled.span`
  color: var(--color-text);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const DescriptionText = styled.p`
  color: rgba(25, 26, 21, 0.5);
  font-size: 16px;
  line-height: 1.25;
`;
