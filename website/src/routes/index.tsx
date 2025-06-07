import { RouterProvider, createHashRouter, RouteObject } from 'react-router-dom';
import { Suspense } from "react";
import Home from "@/pages/index"
import English from '@/pages/english';
import EnglishOne from '@/pages/english/one';
import EnglishTwo from '@/pages/english/two';
import EnglishThree from '@/pages/english/three';
import EnglishFour from '@/pages/english/four';
import EnglishFive from '@/pages/english/five';
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
      }
    ]
  }
]

const router = createHashRouter(newRoutesConfig, {})
export const Routes = () => {
  return <RouterProvider router={router} />
}
