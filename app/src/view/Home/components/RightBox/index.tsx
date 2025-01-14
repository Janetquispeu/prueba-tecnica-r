import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import { images } from '@app/assets/images';
import { saveData } from '@app/view/slices/saveUserData';
import LoginForm from '../Form'
import { ImageResponsive, RightBoxStyle } from './styled';

export const RightBox = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    dispatch(saveData({ data: {
      phone: values.phone,
      documentNumber: values.documentNumber
    }}))
    navigate('/plans');
  };

  return (
    <RightBoxStyle className="b-home--right">
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
          initialValues={{ documentType: '1' }}
        />
      </div>
    </RightBoxStyle>
  );
};
