import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/action';
import '../CSS/login.css';
import Nav from './Nav';
import { useNavigate } from 'react-router';

const Login = () => {
  const[value,setValue]  = useState({
    email:'',
    password:''
  })
const navigate = useNavigate()
const dispatch = useDispatch()
const handleChange = ( e ) =>{
  
let inpValue = e.target.value
let name = e.target.name
setValue({...value,[name]:inpValue})
}
// console.log(value)

const handleSumit =  ( e ) =>{
  e.preventDefault()

 if(value.email !== 'foo'){
  alert("Enter Correct Email")
  return
 }else if(value.password !== 'bar'){
  alert("Enter Correct Password")
  return
 }
 dispatch(login())
//  console.log(value)
navigate('/')
}

const { loginStatus } = useSelector((store)=>store)
// console.log(loginStatus)
  return (
    <>
    {loginStatus && <Nav />}
   <div className='LoginContainer'>
     <h1 className="loginheading">Login</h1>
     <br />
     <form action="" onSubmit={handleSumit}>
        <label htmlFor="">Email</label><br />
        <input type="text" 
        placeholder='Enter Email'
        name='email'
        onChange={handleChange}
        value={value.email}/><br /><br />

        <label htmlFor="">Password</label><br />
        <input type="password" 
        placeholder='Enter Password'
        name='password'
        onChange={handleChange}
        value={value.password}/><br/><br />

        <input type='submit' value="Submit" className='SubmitButton'/>
    </form>
   </div>
   </>
  )
}

export default Login