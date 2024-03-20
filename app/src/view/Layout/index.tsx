import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '@app/components/Footer';
import { Header } from '@app/components/Header';
import { LayoutContent, LayoutStyle } from './styled';

export const Layout = () => {
  return (
    <LayoutStyle>
      <Header />
      <LayoutContent>
        <Outlet />
      </LayoutContent>
      <Footer />
    </LayoutStyle>
  );
};
