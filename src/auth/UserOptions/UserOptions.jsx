import React, { useState } from 'react';
import UserOptionStyle from '../../styles/UserOptions.module.css';
import { UserIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const UserOptions = () => {
  const logo = "Solvas";
  const [role, setRole] = useState(''); // State to capture selected role
  const navigate = useNavigate(); // Navigation hook

  const handleCreateAccount = () => {
    if (role === 'technician') {
      navigate('/join', { state: { role } }); // Pass role to the signup page
    }else if(role === 'client'){
      navigate('/clientsignup',{state:{role}})
    }else {
      toast.error('Please select an option to continue.');
    }
  };

  return (
    <div className={UserOptionStyle.container}>
      {/* Logo */}
      <div className={UserOptionStyle.logo}>
        <h1 className={UserOptionStyle.logoText}>{logo}</h1>
      </div>

      {/* Content */}
      <div className={UserOptionStyle.content}>
        <h3 style={{fontSize: '1.5rem'}}>Join as a client or technician</h3>

        {/* Options */}
        <div className={UserOptionStyle.contentSub}>
          <div
            className={UserOptionStyle.optionCard}
            onClick={() => setRole('client')}
          >
            <UserIcon style={{ marginTop: '10px' }} />
            <input
              type="radio"
              name="role"
              checked={role === 'client'}
              readOnly
              className={UserOptionStyle.radio}
            />
            <p className={UserOptionStyle.optionText}>
              I'm a client hiring for a technician
            </p>
          </div>

          <div
            className={UserOptionStyle.optionCard}
            onClick={() => setRole('technician')}
          >
            <UserIcon style={{ marginTop: '10px' }} />
            <input
              type="radio"
              name="role"
              checked={role === 'technician'}
              readOnly
              className={UserOptionStyle.radio}
            />
            <p className={UserOptionStyle.optionText}>
              I'm a technician looking for work
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className={UserOptionStyle.buttonContainer}>
          <button
            className={UserOptionStyle.btnOne}
            onClick={handleCreateAccount}
          >
            {role === 'client'
              ? 'Register as a Client'
              : role === 'technician'
              ? 'Register as a Technician'
              : 'Create Account'}
          </button>
          <p className={UserOptionStyle.account}>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default UserOptions;
