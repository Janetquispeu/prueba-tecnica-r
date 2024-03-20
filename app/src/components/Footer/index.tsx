import React from 'react';
import Grid from '@mui/material/Grid';
import { images } from '@app/assets/images';
import { FooterStyle, Navbar } from './styled';

export const Footer = () => {
  return (
    <FooterStyle>
      <div className="b-footer">
        <Grid className="b-footer--left" item xs={4}>
          <img src={images.logoBlack} />
        </Grid>
        <Grid className="b-footer--right" item xs={8}>
          <Navbar>
            <ul>
              <li>© 2023 RIMAC Seguros y Reaseguros.</li>
            </ul>
          </Navbar>
        </Grid>
      </div>
    </FooterStyle>
  );
};
