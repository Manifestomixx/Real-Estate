import React from 'react'
import { Link } from 'react-router-dom'
import "../style/Footer.css"

const Footer = () => {
  return (
    <>
    <footer className='footer-bg'>
      <section className='container '>
        <div className='row'>
        <div  className='col-lg-5 mt-5'>
          <div className='d-flex gap-1 align-items-center mb-3'>
            <div className='footer-logo'>BH</div>
            <h3 className='footer-h3 mt-2'>BetaHouse</h3>
          </div>
          <div>
            <p className='footer-p'>Discover, rent, and find your ideal home hassle-free with BetaHouse. Take control of your rental journey today!</p>
          </div>
          <div>
            <div>
              <p className='footer-p'>95 Tinubu Estate, Lekki, Lagos</p>
            </div>
            <div>
              <p className='footer-p'>+234 675 8935 675</p>
            </div>
            <div>
              <p className='footer-p'>support@rentbetahouse.com</p>
            </div>
          </div>
        </div>
        <div  className='col-lg-7 d-flex justify-content-between mt-5 pt-2'>
          
          <div>
            <h3 className='footer-h3 mb-4'>Quick Links</h3>
            <Link to="Hero">
            <p className='footer-p'>Home</p>
            </Link>
            <Link to="Properties">
            <p className='footer-p'>Properties</p>
            </Link>
            <Link to="About">
            <p className='footer-p'>About</p>
            </Link>
            <Link to="">
            <p className='footer-p'>Contact us</p>
            </Link>
            <Link to="">
            <p className='footer-p'>Blog</p>
            </Link>
           
          </div>
          <div>
            <h3 className='footer-h3 mb-4'>More</h3>
            <p className='footer-p'>Agent</p>
            <p className='footer-p'>Affordable Houses</p>
            <p className='footer-p'>FAQ's</p>
          </div>
          <div>
            <h3 className='footer-h3 mb-4'>Popular Search</h3>
            <p className='footer-p'>Apartment for sale</p>
            <p className='footer-p'>Apartment for rent</p>
            <p className='footer-p'>3 bedroom flat</p>
            <p className='footer-p'>Bungalow</p>
          </div>
        </div>
        <hr className='text-white'/>
        <div className='d-flex justify-content-between mt-2'>
          <p className='footer-p'>Copyright 2023 Betahouse | Developed by Manithedev</p>
          <p className='footer-p'>Privacy Policy</p>
        </div>
        </div>
      </section>
    </footer>
    </>
  )
}

export default Footer