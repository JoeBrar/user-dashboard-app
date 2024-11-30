import React, { useState, useEffect } from 'react';
import ErrorMessage from '../components/ErrorMessage';
import { 
  BrowserRouter as Router, 
  useNavigate, 
  useParams,
  useLocation 
} from 'react-router-dom';
import Header from '../components/Header';

const UserDetails = () => {
  const navigate=useNavigate();
  const location=useLocation();
  const user=location.state?.user;
  const [error, setError] = useState(null);

  if (error) return <ErrorMessage message={error} />;
  if (!user) return <div>No user selected</div>;

  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className='user-details-outer-div'>
        <div style={{}}>
          <div onClick={()=>{navigate('/')}} className="back-button">Back to Users</div>
        </div>
        
        <div className="user-details-container">
          <h1>{user.name}</h1>
          <div className="user-details-grid">
            <div>
              <h2 style={{color:'#777'}}>Personal Information</h2>
              <p><span className='label-text'>Email:</span> {user.email}</p>
              <p><span className='label-text'>Phone:</span> {user.phone}</p>
              <p><span className='label-text'>Website:</span> {user.website}</p>
              <p>
                <span className='label-text'>Address:</span>
                {` ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
              </p>
            </div>
            
            <div>
              <h2 style={{color:'#777'}}>Company Information</h2>
              <p><span className='label-text'>Name:</span> {user.company.name}</p>
              <p><span className='label-text'>Catchphrase:</span> {user.company.catchPhrase}</p>
              <p><span className='label-text'>Business:</span> {user.company.bs}</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginTop:20,height:1}}></div>
    </div>
  );
}

export default UserDetails