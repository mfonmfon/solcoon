import LandingPage from "../pages/home/LandingPage"
import SolvasPro from "../pages/solvaspro/SolvasPro"
import Explore from "../pages/explore/Explore"
import BecomeTechnician from "../pages/becomeTechnician/BecomeTechnician"
import Login from "../auth/login/Login"
import Signup from "../auth/signup/Signup"
import UserOptions from "../auth/UserOptions/UserOptions"
import LetsMeetYou from "../components/letsMeetYou/LetsMeetYou"
import CongratulationMessage from "../components/onboarding/CongratulationMessage"
import TechnicianDashboard from "../components/dashboard/techniciainDashboard/TechnicainDashboard"
import Order from "../components/order/Order"
import TechnicianProfile from "../components/userProfile/technicianProfile/TechnicianProfile"
import EditProfile from "../components/editProfile/EditProfile"
import TechnicianAssessment from "../components/assessment/TechnicianAssessment"
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
  },

  {
    path: '/becomeatechnician',
    element: <BecomeTechnician/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/join',
    element: <Signup/>
  },
  {
    path: '/option',
    element: <UserOptions/>
  },
  {
    path: '/letsmeetyou',
    element: <LetsMeetYou/>
  },
  {
    path: '/congratulations',
    element:<CongratulationMessage/>
  },
  {
    path: '/technicianDashboard',
    element:<TechnicianDashboard/>
  },
  {
    path: '/order',
    element:<Order/>
  },
  {
    path: '/technicianprofile',
    element:<TechnicianProfile/>
  },
  {
    path: '/editprofile',
    element:<EditProfile/>
  },
  {
    path: '/technicianassessment',
    element:<TechnicianAssessment/>
  },

]
export default SOLVAS_ROUTES