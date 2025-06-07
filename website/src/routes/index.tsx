import { RouterProvider, createHashRouter, RouteObject } from 'react-router-dom';
import { Suspense } from "react";
import Home from "@/pages/index"
import English from '@/pages/english';
import EnglishOne from '@/pages/english/one';
import EnglishTwo from '@/pages/english/two';
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
      }
    ]
  }
]

const router = createHashRouter(newRoutesConfig, {})
export const Routes = () => {
  return <RouterProvider router={router} />
}
