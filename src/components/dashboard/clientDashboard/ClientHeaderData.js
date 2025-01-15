import { BiNotification } from "react-icons/bi";

const clientNavBarData = [{
  id:0,
  text:"Find Technician",
  path:"/findtechnician",
},
{
  id:1,
  text:"Create Post",
  path:"/createpost",
},
{
  id:2,
  text:"Earnings",
  path:"/earnings",
},
{
  id:3,
  text:"Message",
  path:"/message",
}

]

 export const secondNavBarData = [
  {
    id:0,
    path:"/notifications",
    icon:<BiNotification/>,
    
  },
  {
    id:1,
    path:"/profile",
    icon:<BiNotification/>,
  
  },
  {
    id:0,
    path:"/notifications",
    icon:<BiNotification/>,
   
  },
]
export default clientNavBarData;