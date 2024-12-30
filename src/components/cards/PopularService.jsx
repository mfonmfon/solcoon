import React from 'react'
import PopularServiceStyle from '../../styles/PopularService.module.css'

const PopularService = () => {
  return (
    <div className={PopularServiceStyle.scrollcontainer }>
      <div className={PopularServiceStyle.headerText}>
        <h1>{`Popular Services`}</h1>
      </div>
      <div  className={PopularServiceStyle.scroll}>

        <div className={PopularServiceStyle.card}>
          <h3>{`Panel Cleaning`}</h3>
          <img src={PopularServiceStyle.service1} alt="" />
        </div>
        <div className={PopularServiceStyle.card}>
          <h3>{`Inverter Troubleshooting`}</h3>
          <img src={PopularServiceStyle.service1} alt="" />
        </div>

        <div className={PopularServiceStyle.card}>
          <h3>{`Battery System`}</h3>
          <img src={PopularServiceStyle.service1} alt="" />
        </div>

        <div className={PopularServiceStyle.card}>
          <h3>{`System Diagnostics`}</h3>
          <img src={PopularServiceStyle.service1} alt="" />
        </div>

        <div className={PopularServiceStyle.card}>
          <h3>{`Technical Trainers`}</h3>
          <img src={PopularServiceStyle.service1} alt="" />

        </div>
        <div className={PopularServiceStyle.card}>
          <h3>{`Technical Trainers`}</h3>
          <img src={PopularServiceStyle.service1} alt="" />

        </div>
      </div>
    </div>
  )
}
export default PopularService
