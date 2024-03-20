import React from 'react';
import Grid from '@mui/material/Grid';
import { icons } from '@app/assets/icons';
import { images } from '@app/assets/images';
import { Icon } from '../Icon';
import './style.scss';

export const Header = () => {
  return (
    <header className="b-header-wrapper">
      <Grid container className="b-header">
        <Grid className="b-header--left" item xs={4}>
          <img src={images.logo} />
        </Grid>
        <Grid className="b-header--right" item xs={8}>
          <nav>
            <ul className="b-header__navbar">
              <li className="b-header__navbar-item">¡Compra por este medio!</li>
              <li className="b-header__navbar-item">
                <Icon icon={icons.phone} size="20px" />
                <div className="b-header__navbar-item-text">(01) 411 6001</div>
              </li>
            </ul>
          </nav>
        </Grid>
      </Grid>
    </header>
  );
};
