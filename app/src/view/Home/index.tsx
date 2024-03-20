import React from 'react';
import { useNavigate } from 'react-router-dom';
import { images } from '@app/assets/images';
import Divider from '@mui/material/Divider';
import LoginForm from './components/Form'
import { HomeStyle, ImageResponsive, LeftBox, RightBox } from './styled';

export const Home = () => {
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    //TO DO
    console.log(values, 'values')
    navigate('/plans')
  };

  return (
    <HomeStyle className="">
      <LeftBox className="b-home--left">
        <div>
          <img className="b-home__image" src={images.home} alt="home" />
        </div>
      </LeftBox>
      <RightBox className="b-home--right">
        <div className="b-wrapper-right-box">
          <div className="b-wrapper-title">
            <div className="b-wrapper-tag-promo">
              <img className="b-tag-promo" src={images.tagPromo} alt="home" />
              <h1>Creado para ti y tu familia</h1>
            </div>
            <ImageResponsive>
              <img className="b-home__image-responsive" src={images.homeResponsive} alt="home" />
            </ImageResponsive>
          </div>
          <div className="b-wrapper-text">
            <Divider className="b-divider" />
            <p>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestras asesoría. 100% online.</p>
          </div>
          <LoginForm
            onSubmit={handleSubmit}
            name="loginForm"
            initialValues={{
              documentType: '1'
            }}
          />
        </div>
      </RightBox>
    </HomeStyle>
  );
};
