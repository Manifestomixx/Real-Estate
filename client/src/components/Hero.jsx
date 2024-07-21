import React, { useState } from 'react'
import "../style/Hero.css";
import BGimage from "../assets/hero.png"
import Properties from './Properties';

const Hero = () => {

    const [number, setNumber] = useState(0)
    const handleIncrement = ()=>{
        if (number < 10){
            setNumber(number+1);
        }
    };
    const handleDecrement = ()=>{
        if (number > 0){
            setNumber(number-1);
        }
    }
    
  return (
    <>
    <main className='bgImg'>
        <section className='container box'>
            <div>
                <h1 className='text-white text-center head1'>Browse Our Properties</h1>
                <h4 className=' text-center head2'>Find your perfect home among our curated properties. Start browsing now!</h4>
            </div>
            <div className='outer-box p-4'>
                <div className='ps-2 d-flex justify-content-center row inner-container'>

              <div className='inner-box row col-9'>
                <div className='col-md-4 my-2 ps-5'>
                    <h3 className='md-text'>LOCATION</h3>
                    <input type="search" placeholder='eg. Gbagada' className='sm-text'/>
                    {/* <p className='sm-text'>eg. Gbagada </p> */}
                </div>
                <div className='col-md-4 my-2 text-center box-line'>
                    <h3 className='md-text'>PROPERTY TYPE</h3>
                    <input type="search" placeholder='eg. Duplex, Bedroom Flat' className='sm-text'/>
                    {/* <p className='sm-text'>eg. Duplex, Bedroom Flat</p> */}
                </div>
                <div className='col-md-4 my-2 text-center box-line'>
                    <h3 className='md-text'>BEDROOM</h3>
                    <div className='d-flex gap-3 justify-content-center'>
                    <button className='bed-btn' onClick={handleDecrement}>-</button><span>{number}</span><button className='bed-btn' onClick={handleIncrement}>+</button>
                    </div>
                </div>

              </div>  
                <div className='green col-3 d-flex justify-content-center align-items-center pt-3'>
                    <p className='green-text '>Find Property</p>
                </div>
                </div>
            </div>
        </section>
    </main>
        <section>
            <Properties/>
        </section>
    
    </>
  )
}

export default Hero