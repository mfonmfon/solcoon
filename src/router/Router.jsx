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
import FindTechnician from "../components/dashboard/findtechnician/FindTechnician"
import Message from "../components/dashboard/message/Message"
import ClientPostCreation from "../components/dashboard/clientpost/ClientPostCreation"
import Earnings from "../components/dashboard/earnings/Earnings"
import ClientDashboard from "../components/dashboard/clientDashboard/ClientDashboard"
import FindWork from '../components/dashboard/clientDashboard/RecentPost'
import Subscription from "../components/subscription/Subscription"
import ClientSignup from "../auth/signup/client/ClientSignup"
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
    path: '/clientsignup',
    element:<ClientSignup/>
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
  {
    path: '/findtechnician',
    element:<FindTechnician/>
  },
  {
    path: '/message',
    element:<Message/>
  },
  {
    path: '/createpost',
    element:<ClientPostCreation/>
  },
  {
    path: '/earnings',
    element:<Earnings/>
  },
  {
    path: '/clientdashboard',
    element:<ClientDashboard/>
  },

  {
    path: '/findwork',
    element:<FindWork/>
  },
  {
    path: '/subscription',
    element:<Subscription/>
  }


]
export default SOLVAS_ROUTES