import { RouterProvider, createHashRouter, RouteObject } from 'react-router-dom';
import { Suspense } from "react";
import Home from "@/pages/index"
import DataScience from '@/pages/data_science';
import DataScienceOne from '@/pages/data_science/1';
import DataScienceTwo from '@/pages/data_science/2';
import DataScienceThree from '@/pages/data_science/3';


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
      }
    ]
  }
]

const router = createHashRouter(newRoutesConfig, {})
export const Routes = () => {
  return <RouterProvider router={router} />
}
