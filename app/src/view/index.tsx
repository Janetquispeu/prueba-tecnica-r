import React, { useMemo } from 'react';
import { useRoutes } from 'react-router-dom';
import { UserContext } from '@app/view/context/userContext';
import { routes } from '../config/routes';

export const Root = ({
  email = ''
}) => {
  const routing = useRoutes(routes);
  const contextValue = useMemo(
    () => ({
      email
    }),
    [email]
  );

  return (
    <UserContext.Provider value={contextValue}>
      {routing}
    </UserContext.Provider>
  );
};
