import React from 'react';
import SideBarStyles from '../../styles/SideBar.module.css';
import { SideBarData } from '../header/AppData';
import TechnicianCard from '../dashboard/techniciainDashboard/TechnicianCard';

const SideBar = () => {
  return (
    <div className={SideBarStyles.container}>
      <div className={SideBarStyles.content}>
        <ul className={SideBarStyles.SideBarItems}>
          {SideBarData.map((value, index) => (
            <li
              key={index}
              className={SideBarStyles.SideBarItemsList}
              onClick={() => {
                window.location.pathname = value.path;
              }}
            >
              <div className={SideBarStyles.icon}>{value.icons}</div>
              <div className={SideBarStyles.text}>
                <h4>{value.userProfile}</h4>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={SideBarStyles.profileSection}>
        {/* <TechnicianCard /> */}
      </div>
    </div>
  );
};

export default SideBar;
