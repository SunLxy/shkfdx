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

// 人工智能
import IntroductionToArtificialIntelligence from '@/pages/introduction_to_artificial_intelligence';
import IntroductionToArtificialIntelligenceOne from '@/pages/introduction_to_artificial_intelligence/chapter/1';
import IntroductionToArtificialIntelligenceOneOne from '@/pages/introduction_to_artificial_intelligence/chapter/1/1';
import IntroductionToArtificialIntelligenceOneTwo from '@/pages/introduction_to_artificial_intelligence/chapter/1/2';
import IntroductionToArtificialIntelligenceOneThree from '@/pages/introduction_to_artificial_intelligence/chapter/1/3';
import IntroductionToArtificialIntelligenceTwo from '@/pages/introduction_to_artificial_intelligence/chapter/2';
import IntroductionToArtificialIntelligenceTwoOne from '@/pages/introduction_to_artificial_intelligence/chapter/2/1';
import IntroductionToArtificialIntelligenceTwoTwo from '@/pages/introduction_to_artificial_intelligence/chapter/2/2';
import IntroductionToArtificialIntelligenceTwoThree from '@/pages/introduction_to_artificial_intelligence/chapter/2/3';


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
      },


      // 人工智能
      {
        path: '/introduction_to_artificial_intelligence',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligence /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/1',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceOne /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/1/1',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceOneOne /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/1/2',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceOneTwo /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/1/3',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceOneThree /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/2',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceTwo /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/2/1',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceTwoOne /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/2/2',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceTwoTwo /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/2/3',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceTwoThree /></Suspense>
      },

    ]
  }
]

const router = createHashRouter(newRoutesConfig, {})
export const Routes = () => {
  return <RouterProvider router={router} />
}
