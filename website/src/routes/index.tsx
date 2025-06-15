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
import Computer_network from '@/pages/computer_network';
import Computer_networkOne from '@/pages/computer_network/one';
import Computer_networkOneChecked from '@/pages/computer_network/one-checked';

import Computer_networkTwo from '@/pages/computer_network/two';
import Computer_networkTwoChecked from '@/pages/computer_network/two-checked';

import Computer_networkThree from '@/pages/computer_network/three';
import Computer_networkThreeChecked from '@/pages/computer_network/three-checked';

import Computer_networkFour from '@/pages/computer_network/four';
import Computer_networkFourChecked from '@/pages/computer_network/four-checked';

import Computer_networkFive from '@/pages/computer_network/five';
import Computer_networkFiveChecked from '@/pages/computer_network/five-checked';

import Computer_networkSix from '@/pages/computer_network/six';
import Computer_networkSixChecked from '@/pages/computer_network/six-checked';

import Computer_networkSeven from '@/pages/computer_network/seven';


import OS from '@/pages/os';
import OSOne from '@/pages/os/one';
import OSTwo from '@/pages/os/two';
import OSThree from '@/pages/os/three';



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
      {
        path: '/computer_network',
        element: <Suspense fallback={<div>Loading...</div>}><Computer_network /></Suspense>
      },
      {
        path: '/computer_network/one',
        element: <Suspense fallback={<div>Loading...</div>}><Computer_networkOne /></Suspense>
      },
      {
        path: '/computer_network/one-checked',
        element: <Suspense fallback={<div>Loading...</div>}><Computer_networkOneChecked /></Suspense>
      },

      {
        path: '/computer_network/two',
        element: <Suspense fallback={<div>Loading...</div>}><Computer_networkTwo /></Suspense>
      },
      {
        path: '/computer_network/two-checked',
        element: <Suspense fallback={<div>Loading...</div>}><Computer_networkTwoChecked /></Suspense>
      },

      {
        path: '/computer_network/three',
        element: <Suspense fallback={<div>Loading...</div>}><Computer_networkThree /></Suspense>
      },
      {
        path: '/computer_network/three-checked',
        element: <Suspense fallback={<div>Loading...</div>}><Computer_networkThreeChecked /></Suspense>
      },

      {
        path: '/computer_network/four',
        element: <Suspense fallback={<div>Loading...</div>}><Computer_networkFour /></Suspense>
      },
      {
        path: '/computer_network/four-checked',
        element: <Suspense fallback={<div>Loading...</div>}><Computer_networkFourChecked /></Suspense>
      },

      {
        path: '/computer_network/five',
        element: <Suspense fallback={<div>Loading...</div>}><Computer_networkFive /></Suspense>
      },
      {
        path: '/computer_network/five-checked',
        element: <Suspense fallback={<div>Loading...</div>}><Computer_networkFiveChecked /></Suspense>
      },

      {
        path: '/computer_network/six',
        element: <Suspense fallback={<div>Loading...</div>}><Computer_networkSix /></Suspense>
      },
      {
        path: '/computer_network/six-checked',
        element: <Suspense fallback={<div>Loading...</div>}><Computer_networkSixChecked /></Suspense>
      },

      {
        path: '/computer_network/seven',
        element: <Suspense fallback={<div>Loading...</div>}><Computer_networkSeven /></Suspense>
      },

      {
        path: '/os',
        element: <Suspense fallback={<div>Loading...</div>}><OS /></Suspense>
      },
      {
        path: '/os/one',
        element: <Suspense fallback={<div>Loading...</div>}><OSOne /></Suspense>
      },
      {
        path: '/os/two',
        element: <Suspense fallback={<div>Loading...</div>}><OSTwo /></Suspense>
      },
      {
        path: '/os/three',
        element: <Suspense fallback={<div>Loading...</div>}><OSThree /></Suspense>
      },
    ]
  }
]

const router = createHashRouter(newRoutesConfig, {})
export const Routes = () => {
  return <RouterProvider router={router} />
}
