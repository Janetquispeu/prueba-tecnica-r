import React from 'react';
import { LeftBox } from './components/LeftBox';
import { RightBox } from './components/RightBox';
import { HomeStyle, LayoutContent, LayoutStyle } from './styled';

export const Home = () => {
  return (
    <LayoutStyle>
      <LayoutContent>
        <HomeStyle>
          <LeftBox />
          <RightBox />
        </HomeStyle>
      </LayoutContent>
    </LayoutStyle>
  );
};
