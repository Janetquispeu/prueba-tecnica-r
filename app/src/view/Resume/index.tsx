import React from 'react';
import Divider from '@mui/material/Divider';
import { icons } from '@app/assets/icons';
import { Icon } from '@app/components/Icon';
import { GotoBack } from '../components/GoToBack';
import { LayoutContent, MiniBox, ResumeCardWrapper, ResumeStyle, User } from './styled';

export const Resume = () => (
  <ResumeStyle>
    <LayoutContent>
      <GotoBack url="/plans" />
      <h2>Resumen del seguro</h2>
      <ResumeCardWrapper>
        <div className="b-price-calculate-for">Precios calculados para:</div>
        <User>
          <Icon icon={icons.user} size="20px" />
          <span className="b-text-user">Rocío Miranda Díaz</span>
        </User>
        <Divider />
        <MiniBox>
          <span className="b-text b-text--bold">Responsable de pago</span>
          <span className="b-text">DNI: 444888888</span>
          <span className="b-text">Celular: 5133333333</span>
        </MiniBox>
        <MiniBox>
          <span className="b-text b-text--bold">Plan elegido</span>
          <span className="b-text">Plan en Casa y Clinica</span>
          <span className="b-text">Costo del Plan: $99 al mes</span>
        </MiniBox>
      </ResumeCardWrapper>
    </LayoutContent>
  </ResumeStyle>
);
