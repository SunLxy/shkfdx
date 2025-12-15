import { RouterProvider, createHashRouter, RouteObject } from 'react-router-dom';
import { Suspense } from "react";
import Home from "@/pages/index"
import DataScience from '@/pages/data_science';
import DataScienceOne from '@/pages/data_science/1';
import DataScienceTwo from '@/pages/data_science/2';
import DataScienceThree from '@/pages/data_science/3';
import Database from '@/pages/database';
import DatabaseOne from '@/pages/database/1';
import DatabaseTwo from '@/pages/database/2';
import DatabaseThree from '@/pages/database/3';
import DatabaseFour from '@/pages/database/4';


import { RootRoute } from "./root"

const newRoutesConfig: RouteObject[] = [
  {
    path: "/",
    element: <RootRoute />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/data_science',
        element: <Suspense fallback={<div>Loading...</div>}><DataScience /></Suspense>
      },
      {
        path: '/data_science/1',
        element: <Suspense fallback={<div>Loading...</div>}><DataScienceOne /></Suspense>
      },
      {
        path: '/data_science/2',
        element: <Suspense fallback={<div>Loading...</div>}><DataScienceTwo /></Suspense>
      },
      {
        path: '/data_science/3',
        element: <Suspense fallback={<div>Loading...</div>}><DataScienceThree /></Suspense>
      },
      {
        path: '/database',
        element: <Suspense fallback={<div>Loading...</div>}><Database /></Suspense>
      },
      {
        path: '/database/1',
        element: <Suspense fallback={<div>Loading...</div>}><DatabaseOne /></Suspense>
      },
      {
        path: '/database/2',
        element: <Suspense fallback={<div>Loading...</div>}><DatabaseTwo /></Suspense>
      },
      {
        path: '/database/3',
        element: <Suspense fallback={<div>Loading...</div>}><DatabaseThree /></Suspense>
      },
      {
        path: '/database/4',
        element: <Suspense fallback={<div>Loading...</div>}><DatabaseFour /></Suspense>
      }
    ]
  }
]

const router = createHashRouter(newRoutesConfig, {})
export const Routes = () => {
  return <RouterProvider router={router} />
}
