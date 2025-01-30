import { MessageCircleIcon, PlusIcon, SettingsIcon, Text, UserIcon } from "lucide-react"
import { IoNotificationsCircle } from "react-icons/io5"
import { MdRateReview } from "react-icons/md"

const clientSideBar = [
  {
    id:0, 
    text:"Home",
    icons:<PlusIcon/>,
    path:"/clientdashboard",
  },
  {
    id:1, 
    text:"Find Technician",
    icons:<MdRateReview/>,
    path:"/findTechnician",
  },
  {
    id:2, 
    text:"Message",
    icons:<MessageCircleIcon/>,
    path:"/message",
  },

  {
    id:3, 
    text:"Notifications",
    icons:<IoNotificationsCircle/>,
    path:"/notifications",
  }
  ,
  {
    id:3, 
    text:"Subscription",
    icons:<SettingsIcon/>,
    path:"/subscription",
  },
  {
    id:3, 
    text:"Dictionary",
    icons:<SettingsIcon/>,
    path:"/dictionary",
  },
  {
    id:3, 
    text:"Settings",
    icons:<SettingsIcon/>,
    path:"/settings",
  }

  
]
export default clientSideBar