import React, {useState, useEffect} from 'react'
import TechnicianHeroectionStyle from '../../../styles/TechnicianHeroection.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useLocation } from 'react-router-dom';
import { SideBarData, sliderData } from '../../header/AppData';
import TechnicianHeader from './TechnicianHeader';
const TechnicianHeroection = () => {
  const[search, setSearch] = useState('')
  const[filteredJobs, setFilteredJobs] = useState([]);
  const[jobs, setJobs] = useState([]);
  const[firstName, setFirstName] = useState();
  useEffect(()=>{

    const fetchJobs = async ()=>{
     try{
      const jobSearchResponse = await fetch('');
      if(jobSearchResponse.ok){
        const jobsData = await jobSearchResponse.json();
        setJobs(jobsData);
        setFilteredJobs(jobsData);
      }else{
        console.log("Failed to fetch")
      }
     }catch(error){
      console.log('Error fetching jobs',error)
     }
    }
    fetchJobs();

    
    const storedFirstName = localStorage.getItem(`firstName`) ; 
    console.log(storedFirstName);
    if(storedFirstName){
      setFirstName(JSON.parse(storedFirstName));
    }

  },[])

  const handleTechnicianSearchInput = (event)=>{
    const querySearch = event.target.value.toLowerCase();
    setSearch(querySearch);

    const filtered = jobs.filter((jobs)=>
      jobs.title.toLowerCase().includes(querySearch)||
      jobs.description.toLowerCase().includes(querySearch)    
    
    )
    setFilteredJobs(filtered);
  }

  
  // const firstName = user?.firstName
  console.log(firstName)
  const settings = {
    dot: false,
    infinite: true,
    arrow: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true
  }
  
  return (
    <div className={TechnicianHeroectionStyle.technicianHerosectioncontainer}>
      <TechnicianHeader/>
       <div className={TechnicianHeroectionStyle.searchInputContainer}>
       <div className={TechnicianHeroectionStyle.welcomeMessage}>
        {/* Render the welcome message */}
        <h1>Welcome on board {firstName}</h1>
      </div>
      <div className={TechnicianHeroectionStyle.content}>
        <input 
        className={TechnicianHeroectionStyle.technicianInput}
        type='search'
        name='search'
        placeholder='Explore here'
        />
         <button className={TechnicianHeroectionStyle.sectionBtn}>Search</button>
      </div>
     
       </div>

       {/* <div className={TechnicianHeroectionStyle.jobContainer}>
        {filteredJobs.map((jobs, index)=(
          <div key={index} className=''>
            <h1>{jobs.title}</h1>
            <p>{jobs.description}</p>

          </div>
        ))}
       </div> */}
      
    </div>
  )
}

export default TechnicianHeroection
