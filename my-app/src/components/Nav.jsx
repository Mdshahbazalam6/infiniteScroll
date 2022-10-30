import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import '../CSS/nav.css';
import { logout } from '../redux/action';


const Nav = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  return (
    <div className='NavbarMainContainer'>
       <div className="navbarInnerContainer">
       <p onClick={()=>navigate('/')}>Home</p>
        <p onClick={()=>navigate('/login')}>Login</p>
        <p onClick={()=>{
          dispatch(logout())
          navigate('/')
        }}>Logout</p>
       </div>
    </div>
  )
}

export default Nav