import LandingPage from "../pages/home/LandingPage"
import SolvasPro from "../pages/solvaspro/SolvasPro"
import Explore from "../pages/explore/Explore"
const SOLVAS_ROUTES = [
  {
    path:'',
    element: <LandingPage/>,
    children: [
      {
        path: '/',
        element: <LandingPage/>
      }
    ]
  },
  {
    path:'/solvaspro',
    element: <SolvasPro/>,
  },
  {
    path: '/explore',
    element: <Explore/>
  }

]
export default SOLVAS_ROUTES