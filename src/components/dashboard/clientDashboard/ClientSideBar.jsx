import React from 'react'
import ClientSideBarStyle from '../../../styles/ClientSideBar.module.css'
import clientSideBar from './clientSideBarData'
import { Link } from 'react-router-dom'
const ClientSideBar = () => {
  return (
    <div className={ClientSideBarStyle.container}>
      <div className={ClientSideBarStyle.sidebar}>
        <h1>Mfon Mfon</h1>
        <p>@mfonmfon</p>
      </div>

      <div className={ClientSideBarStyle.content}>
      <ul>
        {clientSideBar.map((sideBar, index) =>{
          return(
            <li key={index}>
              <Link to={sideBar.path}>{sideBar.text}</Link>
            </li>
          )
        })}
      </ul>
      </div>

      <div className={ClientSideBarStyle.footer}>
        <h1>Client Footer</h1>
      </div>
    </div>
  )
}

export default ClientSideBar
