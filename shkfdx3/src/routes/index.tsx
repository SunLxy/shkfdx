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

import IntroductionToArtificialIntelligencez from '@/pages/introduction_to_artificial_intelligence/chapter/0';
import IntroductionToArtificialIntelligencezOne from '@/pages/introduction_to_artificial_intelligence/chapter/0/1';
import IntroductionToArtificialIntelligencezTwo from '@/pages/introduction_to_artificial_intelligence/chapter/0/2';
import IntroductionToArtificialIntelligencezThree from '@/pages/introduction_to_artificial_intelligence/chapter/0/3';
import IntroductionToArtificialIntelligencezFour from '@/pages/introduction_to_artificial_intelligence/chapter/0/4';


import IntroductionToArtificialIntelligence from '@/pages/introduction_to_artificial_intelligence';
import IntroductionToArtificialIntelligenceOne from '@/pages/introduction_to_artificial_intelligence/chapter/1';
import IntroductionToArtificialIntelligenceOneOne from '@/pages/introduction_to_artificial_intelligence/chapter/1/1';
import IntroductionToArtificialIntelligenceOneTwo from '@/pages/introduction_to_artificial_intelligence/chapter/1/2';
import IntroductionToArtificialIntelligenceOneThree from '@/pages/introduction_to_artificial_intelligence/chapter/1/3';
import IntroductionToArtificialIntelligenceTwo from '@/pages/introduction_to_artificial_intelligence/chapter/2';
import IntroductionToArtificialIntelligenceTwoOne from '@/pages/introduction_to_artificial_intelligence/chapter/2/1';
import IntroductionToArtificialIntelligenceTwoTwo from '@/pages/introduction_to_artificial_intelligence/chapter/2/2';
import IntroductionToArtificialIntelligenceTwoThree from '@/pages/introduction_to_artificial_intelligence/chapter/2/3';
import IntroductionToArtificialIntelligenceThree from '@/pages/introduction_to_artificial_intelligence/chapter/3';
import IntroductionToArtificialIntelligenceThreeOne from '@/pages/introduction_to_artificial_intelligence/chapter/3/1';
import IntroductionToArtificialIntelligenceThreeTwo from '@/pages/introduction_to_artificial_intelligence/chapter/3/2';
import IntroductionToArtificialIntelligenceThreeThree from '@/pages/introduction_to_artificial_intelligence/chapter/3/3';

import IntroductionToArtificialIntelligenceFour from '@/pages/introduction_to_artificial_intelligence/chapter/4';
import IntroductionToArtificialIntelligenceFourOne from '@/pages/introduction_to_artificial_intelligence/chapter/4/1';
import IntroductionToArtificialIntelligenceFourTwo from '@/pages/introduction_to_artificial_intelligence/chapter/4/2';
import IntroductionToArtificialIntelligenceFourThree from '@/pages/introduction_to_artificial_intelligence/chapter/4/3';

import IntroductionToArtificialIntelligenceFive from '@/pages/introduction_to_artificial_intelligence/chapter/5';
import IntroductionToArtificialIntelligenceFiveOne from '@/pages/introduction_to_artificial_intelligence/chapter/5/1';
import IntroductionToArtificialIntelligenceFiveTwo from '@/pages/introduction_to_artificial_intelligence/chapter/5/2';
import IntroductionToArtificialIntelligenceFiveThree from '@/pages/introduction_to_artificial_intelligence/chapter/5/3';

import IntroductionToArtificialIntelligenceSix from '@/pages/introduction_to_artificial_intelligence/chapter/6';
import IntroductionToArtificialIntelligenceSixOne from '@/pages/introduction_to_artificial_intelligence/chapter/6/1';
import IntroductionToArtificialIntelligenceSixTwo from '@/pages/introduction_to_artificial_intelligence/chapter/6/2';
import IntroductionToArtificialIntelligenceSixThree from '@/pages/introduction_to_artificial_intelligence/chapter/6/3';

import IntroductionToArtificialIntelligenceSeven from '@/pages/introduction_to_artificial_intelligence/chapter/7';
import IntroductionToArtificialIntelligenceSevenOne from '@/pages/introduction_to_artificial_intelligence/chapter/7/1';
import IntroductionToArtificialIntelligenceSevenTwo from '@/pages/introduction_to_artificial_intelligence/chapter/7/2';
import IntroductionToArtificialIntelligenceSevenThree from '@/pages/introduction_to_artificial_intelligence/chapter/7/3';
import IntroductionToArtificialIntelligenceSevenFour from '@/pages/introduction_to_artificial_intelligence/chapter/7/4';

import IntroductionToArtificialIntelligenceEight from '@/pages/introduction_to_artificial_intelligence/chapter/8';
import IntroductionToArtificialIntelligenceEightOne from '@/pages/introduction_to_artificial_intelligence/chapter/8/1';
import IntroductionToArtificialIntelligenceEightTwo from '@/pages/introduction_to_artificial_intelligence/chapter/8/2';
import IntroductionToArtificialIntelligenceEightThree from '@/pages/introduction_to_artificial_intelligence/chapter/8/3';
import IntroductionToArtificialIntelligenceEightFour from '@/pages/introduction_to_artificial_intelligence/chapter/8/4';

import IntroductionToArtificialIntelligenceNine from '@/pages/introduction_to_artificial_intelligence/chapter/9';
import IntroductionToArtificialIntelligenceNineOne from '@/pages/introduction_to_artificial_intelligence/chapter/9/1';
import IntroductionToArtificialIntelligenceNineTwo from '@/pages/introduction_to_artificial_intelligence/chapter/9/2';

import IntroductionToArtificialIntelligenceTen from '@/pages/introduction_to_artificial_intelligence/chapter/10';
import IntroductionToArtificialIntelligenceTenOne from '@/pages/introduction_to_artificial_intelligence/chapter/10/1';
import IntroductionToArtificialIntelligenceTenTwo from '@/pages/introduction_to_artificial_intelligence/chapter/10/2';
import IntroductionToArtificialIntelligenceTenThree from '@/pages/introduction_to_artificial_intelligence/chapter/10/3';
import IntroductionToArtificialIntelligenceTenFour from '@/pages/introduction_to_artificial_intelligence/chapter/10/4';

import IntroductionToArtificialIntelligenceEleven from '@/pages/introduction_to_artificial_intelligence/chapter/11';
import IntroductionToArtificialIntelligenceElevenOne from '@/pages/introduction_to_artificial_intelligence/chapter/11/1';
import IntroductionToArtificialIntelligenceElevenTwo from '@/pages/introduction_to_artificial_intelligence/chapter/11/2';
import IntroductionToArtificialIntelligenceElevenThree from '@/pages/introduction_to_artificial_intelligence/chapter/11/3';


// 软件工程
import SoftwareEngineering from '@/pages/software_engineering';
import SoftwareEngineeringOne from '@/pages/software_engineering/1';
import SoftwareEngineeringTwo from '@/pages/software_engineering/2';
import SoftwareEngineeringThree from '@/pages/software_engineering/3';
import SoftwareEngineeringFour from '@/pages/software_engineering/4';
import SoftwareEngineeringFive from '@/pages/software_engineering/5';


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
        path: '/introduction_to_artificial_intelligence/0',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligencez /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/0/1',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligencezOne /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/0/2',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligencezTwo /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/0/3',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligencezThree /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/0/4',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligencezFour /></Suspense>
      },

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
      {
        path: '/introduction_to_artificial_intelligence/3',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceThree /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/3/1',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceThreeOne /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/3/2',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceThreeTwo /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/3/3',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceThreeThree /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/4',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceFour /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/4/1',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceFourOne /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/4/2',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceFourTwo /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/4/3',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceFourThree /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/5',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceFive /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/5/1',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceFiveOne /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/5/2',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceFiveTwo /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/5/3',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceFiveThree /></Suspense>
      },

      {
        path: '/introduction_to_artificial_intelligence/6',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceSix /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/6/1',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceSixOne /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/6/2',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceSixTwo /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/6/3',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceSixThree /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/7',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceSeven /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/7/1',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceSevenOne /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/7/2',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceSevenTwo /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/7/3',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceSevenThree /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/7/4',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceSevenFour /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/8',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceEight /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/8/1',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceEightOne /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/8/2',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceEightTwo /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/8/3',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceEightThree /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/8/4',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceEightFour /></Suspense>
      },

      {
        path: '/introduction_to_artificial_intelligence/9',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceNine /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/9/1',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceNineOne /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/9/2',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceNineTwo /></Suspense>
      },

      {
        path: '/introduction_to_artificial_intelligence/10',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceTen /></Suspense>
      },

      {
        path: '/introduction_to_artificial_intelligence/10/1',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceTenOne /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/10/2',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceTenTwo /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/10/3',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceTenThree /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/10/4',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceTenFour /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/11',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceEleven /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/11/1',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceElevenOne /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/11/2',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceElevenTwo /></Suspense>
      },
      {
        path: '/introduction_to_artificial_intelligence/11/3',
        element: <Suspense fallback={<div>Loading...</div>}><IntroductionToArtificialIntelligenceElevenThree /></Suspense>
      },


      // 软件工程
      {
        path: '/software_engineering',
        element: <Suspense fallback={<div>Loading...</div>}><SoftwareEngineering /></Suspense>
      },
      {
        path: '/software_engineering/1',
        element: <Suspense fallback={<div>Loading...</div>}><SoftwareEngineeringOne /></Suspense>
      },
      {
        path: '/software_engineering/2',
        element: <Suspense fallback={<div>Loading...</div>}><SoftwareEngineeringTwo /></Suspense>
      },
      {
        path: '/software_engineering/3',
        element: <Suspense fallback={<div>Loading...</div>}><SoftwareEngineeringThree /></Suspense>
      },
      {
        path: '/software_engineering/4',
        element: <Suspense fallback={<div>Loading...</div>}><SoftwareEngineeringFour /></Suspense>
      },
      {
        path: '/software_engineering/5',
        element: <Suspense fallback={<div>Loading...</div>}><SoftwareEngineeringFive /></Suspense>
      },
    ]
  }
]

const router = createHashRouter(newRoutesConfig, {})
export const Routes = () => {
  return <RouterProvider router={router} />
}
