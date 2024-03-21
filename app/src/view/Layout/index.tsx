import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '@app/components/Footer';
import { Header } from '@app/components/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
