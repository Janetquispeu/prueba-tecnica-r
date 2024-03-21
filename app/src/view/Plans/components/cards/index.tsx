import React from 'react';
import Radio from '@mui/material/Radio';
import { CardStyle, InfoCard, RadioWrapper } from './styled';

export const Card = ({
  image,
  title,
  text,
  onChange,
  value,
  selectedValue
}) => {
  return (
    <CardStyle>
      <RadioWrapper>
        <Radio checked={selectedValue === value} onChange={onChange} value={value} />
      </RadioWrapper>
      <InfoCard>
        <div>
          <img className="b-card__image" src={image} alt={image} />
        </div>
        <span className="b-title">{title}</span>
        <span className="b-text">{text}</span>
      </InfoCard>
    </CardStyle>
  );
};
