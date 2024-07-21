import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import "../style/AuthDropdown.css"

const AuthDropDown = () => {
    const navigate = useNavigate();
    const logOut = ()=>{
        localStorage.removeItem("clientToken")
        navigate("/")};
  return (
    <>
    {/* log out */}
    <div className='d-flex justify-content-center align-items-center flex-column gap-1 dropdown'>
        <p className='my-1 text-white text-center text'>Notification</p>
        <p className=' text-white text-center text' onClick={logOut}>Log Out</p>
      </div>
    </>
  )
}

export default AuthDropDown