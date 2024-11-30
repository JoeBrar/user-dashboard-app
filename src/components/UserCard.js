import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const UserCard = ({ user }) => {
  const navigate=useNavigate();

  return (
    <div className="user-card">
      <div className="card-name-container" onClick={()=>{navigate(`/userDetails`,{state:{user}})}}>
        <span className="user-card-name">{user.name}</span>
      </div>
      <p><span className='label-text'>Email:</span> {user.email}</p>
      <p><span className='label-text'>Phone:</span> {user.phone}</p>
      <p>
        <span className='label-text'>Address:</span> 
        {` ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
      </p>
    </div>
  );
}

export default UserCard;