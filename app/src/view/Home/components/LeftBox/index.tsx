import React from 'react';
import { images } from '@app/assets/images';
import { LeftBoxStyle } from './styled';

export const LeftBox = () => {
  return (
    <LeftBoxStyle className="b-home--left">
      <div>
        <img className="b-home__image" src={images.home} alt="home" />
      </div>
    </LeftBoxStyle>
  );
};
