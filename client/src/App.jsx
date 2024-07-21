import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Hero from './components/Hero';
import Properties from './components/Properties';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import NavBar from './layouts/NavBar';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';
import ForgotPassword from './auth/ForgotPassword';
import ResetPassword from './auth/ResetPassword';
import Error from './components/Error';
import { Toaster } from 'react-hot-toast';
import Footer from './layouts/Footer';

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route element={<><NavBar/><Footer/></>}>
        <Route path="/Hero" element={<Hero/>}/>
        <Route path="/Properties" element={<Properties/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Route>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/" element={<SignIn/>}/>
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
      <Route path='/resetpassword/:resetToken' element={<ResetPassword/>}/>
      <Route path="*" element={<Error/>}/>
     </Routes>
     </BrowserRouter> 
     <Toaster/>
    </>
  )
}

export default App
