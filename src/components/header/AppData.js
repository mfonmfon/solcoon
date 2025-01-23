import FordImage from '../../images/sponsorsImages/FordImage.png'
import GapsImage from '../../images/sponsorsImages/GapsImage.png'
import UberImage from '../../images/sponsorsImages/UberImage.png'
import FordImageTwo from '../../images/sponsorsImages/FordImage.png'
import { BiLeftArrow, BiLogOutCircle, BiNotification } from 'react-icons/bi'
import { RiDropdownList } from 'react-icons/ri'
import { ArrowDownLeft, HomeIcon, LogOut, LogOutIcon, Settings2Icon, SettingsIcon, UserRoundCheckIcon } from 'lucide-react'
import { IoNotificationsCircleOutline } from 'react-icons/io5'
import { MdExplore } from 'react-icons/md'
import technicianImageOne from '../../images/sidebarimages/TechnicianImageOne.jpeg'
const navBarData = [

  {
    id:0,
    path: "/solvaspro",
    text:"solvasPro"
  },

  {
    id:1,
    path: "/explore",
    text:"Explore"
  },

  {
    id:2,
    path: "/becometechnician",
    text:"Become A Technician"
  },

  {
    id:3,
    path: "/login",
    text:"Sign In"
  }
]
export default navBarData;

export const sponsorsData = [
  {
    id:0,
    image: FordImage
  },
  {
    id:0,
    image: FordImage
  },
  {
    id:0,
    image: UberImage
  },
  {
    id:0,
    image: UberImage
  },
  {
    id:0,
    image: UberImage
  },
  
]

export const footerFirtData =[
  {
    id: 0,
    path:"/explore",
    text: "Explore"
  },
  {
    id: 0,
    path:"/explore",
    text: "How Solcon Works"
  },
  {
    id: 0,
    path:"/explore",
    text: "Customer Service Storeies"
  },
  {
    id: 0,
    path:"/explore",
    text: "Trusted & Safety"
  },
  {
    id: 0,
    path:"/explore",
    text: "Quality Guide"
  },
  
]

export const footerSecondData =[
  {
    id: 0,
    path:"",
    text:"Become a Solcon Technician"
  },
  {
    id: 0,
    path:"",
    text:"Kickstart"
  },{
    id: 0,
    path:"",
    text:"Community Hub"
  },{
    id: 0,
    path:"",
    text:"Events"
  },

]

export const footerThirdData =[
  {
    id: 0,
    path:"",
    text:"About Solcon"
  },
  {
    id: 0,
    path:"",
    text:"Help & Support"
  },
  {
    id: 0,
    path:"",
    text:"Social Impact"
  },
  {
    id: 0,
    path:"",
    text:"Term of Service"
  },
  {
    id: 0,
    path:"",
    text:"Privacy & Policy"
  },
  {
    id: 0,
    path:"",
    text:"Partnerships"
  }
]

export const postCardData = [
  {
    id: 0,
    date: new Date(),
    typeOfProblem:"",
    problemDescription: "",

  }
]

export const technicianData = [

  {
    id: 0,
    path:"/order",
    order: "Earning"
   
  },
  {
    id: 0,
    path:"/findwork",
    order:"Find work",
  },

  {
    id: 0,
    path:"/order",
    order:"Messages",
  },
  {
    id: 0,
    path:"/order",
    order:"See Reviews",
  },
]

export const secondTechnicianData = [
  {
    id: 0,
    path:"/order",
    order:"Order",
  },
  {
    id: 0,
    path:"/order",
    order:"Settings",
  },
 {  id: 0,
    path:"/order",
    order:"Logout",
  },
]

export const askQuestionsData =[
  {
    id: 0,
    text:"How does Solcon work?",
    menubar: <ArrowDownLeft/>
  },
  {
    id: 0,
    text:"Are the technicain on the platform trained and certified ?",
    menubar: <ArrowDownLeft/>
  },
  {
    id: 0,
    text:"What kind of service can be requested on the platform ?",
    menubar:<ArrowDownLeft/>
  },
  {
    id: 0,
    text:"How will the technician locate me fast ?",
    menubar: <ArrowDownLeft/>
  },
  {
    id: 0,
    text:"How does Solcon work?",
    menubar: <ArrowDownLeft/>
  },
  
]

export const SideBarData =[
  {
    id: 0,
    icons:<HomeIcon size={15}/>,
    userProfile:"Home",
    path: "/techniciandashboard"
  },
  {
    id: 1,
    icons:<UserRoundCheckIcon  size={15}/>,
    userProfile:"Profile",
    path: "/profile"
  },
  {
    id: 2,
    icons:<MdExplore size={15}/>,
    userProfile:"Explore",
    path: "/home"
  },
  {
    id: 2,
    icons:<MdExplore size={15}/>,
    userProfile:"Earnings",
    path: "/earnings"
  },
  {
    id: 3,
    icons:<SettingsIcon  size={15}/>,
    userProfile:"Settings",
    path: "/settings"
  },
  {
    id: 4,
    icons:<BiLogOutCircle size={15}/>,
    userProfile:"Log Out",
    path: "/logout"
  },
]

export const sliderData = [
  {
    id: 0,
    image: technicianImageOne,
    title: "Welcome onboard"
  },
  {
    id: 0,
    image: technicianImageOne,
    title: "Welcome onboard"
  },
  {
    id: 0,
    image: technicianImageOne,
    title: "Welcome onboard"
  },
  {
    id: 0,
    image: technicianImageOne,
    title: "Welcome onboard"
  },
  {
    id: 0,
    image: technicianImageOne,
    title: "Welcome onboard"
  },
  
]