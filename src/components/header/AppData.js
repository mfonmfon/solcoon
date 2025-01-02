import FordImage from '../../images/sponsorsImages/FordImage.png'
import GapsImage from '../../images/sponsorsImages/GapsImage.png'
import UberImage from '../../images/sponsorsImages/UberImage.png'
import FordImageTwo from '../../images/sponsorsImages/FordImage.png'
import { BiLeftArrow, BiNotification } from 'react-icons/bi'
import { RiDropdownList } from 'react-icons/ri'
import { ArrowDownLeft } from 'lucide-react'
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
    notification: <BiNotification/>,
    order:"Order",
  }
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