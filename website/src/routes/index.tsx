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
import WebOne1 from '@/pages/web/one';
import WebOne2 from '@/pages/web/one-2';
import WebOne3 from '@/pages/web/one-3';
import WebOne4 from '@/pages/web/one-4';
import WebOne5 from '@/pages/web/one-5';
import WebOne6 from '@/pages/web/one-6';
import WebOne7 from '@/pages/web/one-7';
import WebOne8 from '@/pages/web/one-8';
import WebOne9 from '@/pages/web/one-9';
import WebOne10 from '@/pages/web/one-10';
import WebOne11 from '@/pages/web/one-11';
import WebOne13 from '@/pages/web/one-13';
import WebOne14 from '@/pages/web/one-14';
import WebOne15 from '@/pages/web/one-15';
import WebOne16 from '@/pages/web/one-16';

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
        path: '/web/one-1',
        element: <Suspense fallback={<div>Loading...</div>}><WebOne1 /></Suspense>
      },
      {
        path: '/web/one-2',
        element: <Suspense fallback={<div>Loading...</div>}><WebOne2 /></Suspense>
      },
      {
        path: '/web/one-3',
        element: <Suspense fallback={<div>Loading...</div>}><WebOne3 /></Suspense>
      },
      {
        path: '/web/one-4',
        element: <Suspense fallback={<div>Loading...</div>}><WebOne4 /></Suspense>
      },
      {
        path: '/web/one-5',
        element: <Suspense fallback={<div>Loading...</div>}><WebOne5 /></Suspense>
      },
      {
        path: '/web/one-6',
        element: <Suspense fallback={<div>Loading...</div>}><WebOne6 /></Suspense>
      },
      {
        path: '/web/one-7',
        element: <Suspense fallback={<div>Loading...</div>}><WebOne7 /></Suspense>
      },

      {
        path: '/web/one-8',
        element: <Suspense fallback={<div>Loading...</div>}><WebOne8 /></Suspense>
      },
      {
        path: '/web/one-9',
        element: <Suspense fallback={<div>Loading...</div>}><WebOne9 /></Suspense>
      },
      {
        path: '/web/one-10',
        element: <Suspense fallback={<div>Loading...</div>}><WebOne10 /></Suspense>
      },
      {
        path: '/web/one-11',
        element: <Suspense fallback={<div>Loading...</div>}><WebOne11 /></Suspense>
      },
      {
        path: '/web/one-13',
        element: <Suspense fallback={<div>Loading...</div>}><WebOne13 /></Suspense>
      },
      {
        path: '/web/one-14',
        element: <Suspense fallback={<div>Loading...</div>}><WebOne14 /></Suspense>
      },
      {
        path: '/web/one-15',
        element: <Suspense fallback={<div>Loading...</div>}><WebOne15 /></Suspense>
      },
      {
        path: '/web/one-16',
        element: <Suspense fallback={<div>Loading...</div>}><WebOne16 /></Suspense>
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
