import { PlusIcon, Text, UserIcon } from "lucide-react"
import { MdRateReview } from "react-icons/md"

const clientSideBar = [
  {
    id:0, 
    text:"find technician",
    icons:<PlusIcon/>,
    path:"/createpost",
  },
  {
    id:1, 
    text:"create review",
    icons:<MdRateReview/>,
    path:"/createreview",
  },
  {
    id:2, 
    text:"profile",
    icons:<UserIcon/>,
    path:"/profile",
  },
  
]
export default clientSideBar