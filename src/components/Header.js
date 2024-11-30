import React from 'react'
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate=useNavigate();

  const goToHome=()=>{
    navigate('/');
    window.location.reload();
  }

  return (
    <div style={{backgroundColor:'darkblue',display:'flex',justifyContent:'center',marginBottom:20}}>
      <div className="user-dashboard-title" onClick={goToHome}>User Dashboard</div>
    </div>
  )
}

export default Header