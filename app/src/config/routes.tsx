import React from 'react';
import { RouteObject } from 'react-router-dom';
import { Layout } from '@app/view/Layout';
import { Plans } from '@app/view/Plans';
import { Home } from '@app/view/Home';
import { Resume } from '@app/view/Resume';

const routes: RouteObject[] = ([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'plans',
        element: <Plans />,
      },
      {
        path: 'resume',
        element: <Resume />,
      }
    ]
  }
]);

export { routes };
