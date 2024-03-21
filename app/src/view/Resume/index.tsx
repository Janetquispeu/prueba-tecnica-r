import React from 'react';
import { useSelector } from 'react-redux';
import Divider from '@mui/material/Divider';
import { icons } from '@app/assets/icons';
import { Icon } from '@app/components/Icon';
import { selectSaveUserData } from '../slices/saveUserData';
import { GotoBack } from '../components/GoToBack';
import { LayoutContent, MiniBox, ResumeCardWrapper, ResumeStyle, User } from './styled';

export const Resume = () => {
  const saveUserData = useSelector(selectSaveUserData);
  const {
    name,
    lastName,
    phone,
    documentNumber,
    planName,
    price
  } = saveUserData?.data;

  return (
    <ResumeStyle>
      <LayoutContent>
        <GotoBack url="/plans" />
        <h2>Resumen del seguro</h2>
        <ResumeCardWrapper>
          <div className="b-price-calculate-for">Precios calculados para:</div>
          <User>
            <Icon icon={icons.user} size="20px" />
            <span className="b-text-user">{`${name} ${lastName}`}</span>
          </User>
          <Divider />
          <MiniBox>
            <span className="b-text b-text--bold">Responsable de pago</span>
            <span className="b-text">DNI: {documentNumber}</span>
            <span className="b-text">Celular: {phone}</span>
          </MiniBox>
          <MiniBox>
            <span className="b-text b-text--bold">Plan elegido</span>
            <span className="b-text">{planName}</span>
            <span className="b-text">Costo del Plan: ${price} al mes</span>
          </MiniBox>
        </ResumeCardWrapper>
      </LayoutContent>
    </ResumeStyle>
  );
};
