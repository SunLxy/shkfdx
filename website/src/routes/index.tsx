import { RouterProvider, createHashRouter, RouteObject } from 'react-router-dom';
import { Suspense } from "react";
import Home from "@/pages/index"
import English from '@/pages/english';
import EnglishOne from '@/pages/english/one';
import EnglishTwo from '@/pages/english/two';
import EnglishThree from '@/pages/english/three';
import EnglishFour from '@/pages/english/four';
import EnglishFive from '@/pages/english/five';
import EnglishOther from '@/pages/english/other';
import Web from '@/pages/web/index';
import WebOne from '@/pages/web/one';
import WebTwo from '@/pages/web/two';
import WebThree from '@/pages/web/three';

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
        path: '/english',
        element: <Suspense fallback={<div>Loading...</div>}><English /></Suspense>
      },
      {
        path: '/english/one',
        element: <Suspense fallback={<div>Loading...</div>}><EnglishOne /></Suspense>
      },
      {
        path: '/english/two',
        element: <Suspense fallback={<div>Loading...</div>}><EnglishTwo /></Suspense>
      },
      {
        path: '/english/three',
        element: <Suspense fallback={<div>Loading...</div>}><EnglishThree /></Suspense>
      },
      {
        path: '/english/four',
        element: <Suspense fallback={<div>Loading...</div>}><EnglishFour /></Suspense>
      },
      {
        path: '/english/five',
        element: <Suspense fallback={<div>Loading...</div>}><EnglishFive /></Suspense>
      },
      {
        path: '/english/other',
        element: <Suspense fallback={<div>Loading...</div>}><EnglishOther /></Suspense>
      },
      {
        path: '/web',
        element: <Suspense fallback={<div>Loading...</div>}><Web /></Suspense>
      },
      {
        path: '/web/one',
        element: <Suspense fallback={<div>Loading...</div>}><WebOne /></Suspense>
      },
      {
        path: '/web/two',
        element: <Suspense fallback={<div>Loading...</div>}><WebTwo /></Suspense>
      },
      {
        path: '/web/three',
        element: <Suspense fallback={<div>Loading...</div>}><WebThree /></Suspense>
      },

    ]
  }
]

const router = createHashRouter(newRoutesConfig, {})
export const Routes = () => {
  return <RouterProvider router={router} />
}
