import React, {useState, useEffect} from 'react'
import TechnicianHeader from '../techniciainDashboard/TechnicianHeader'
import RecentPost from '../../../components/dashboard/clientDashboard/RecentPost'
import TechnicianHeroection from '../techniciainDashboard/TechnicianHeroection'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import FindWorkStyles from '../../../styles/FindWork.module.css'
const FindWork = () => {
  const [jobs, setJobs] = useState([]);

  // Fetch jobs when the component mounts
  useEffect(() => {
    const fetchAllClientPost = async () => {
      try {
        const response = await fetch("http://localhost:8081/api/post/getAllPost");
        if (response.ok) {
          const data = await response.json();
          setJobs(data);
        } else {
          toast.error("Error fetching jobs");
          console.error("Error fetching jobs");
        }
      } catch (error) {
        toast.error("Error fetching jobs");
        console.error("Error:", error);
      }
    };
    fetchAllClientPost();
  }, []);
  return (
    <div className={FindWorkStyles.findworkcontainer}>
      <h1>Latest Jobs Posts</h1>
      <div className={FindWorkStyles.jobslist}>
        {jobs.map((job) => (
          <div key={job.id} className={FindWorkStyles.jobcard}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <p>Posted by: Client ID {job.customerId}</p>
          </div>
        ))}
      </div>
      <ToastContainer/>
    </div>
  )
}


export default FindWork
