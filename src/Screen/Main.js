import React, { useState, useEffect } from 'react';
import Header from '../Components/Header'

const Main = () => {

    const calculateTimeLeft = () => {
        const difference = +new Date("2024-06-10") - +new Date();
        
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearTimeout(timer);
      });
    
      const { days, hours, minutes, seconds } = timeLeft;




  return (
    <div className='main'>
        <Header/>

        <div className='main-c'>
            <h1 className='poppins-bold'>COMING SOON</h1>
            <h3 className='poppins-medium'>Manage bookings, request quotes, or book a online service</h3>
            <p>We are an on-demand services company that allows guests to easily book various services online. We offer the best services in the country.</p>

            <section className='countdown'>
            {days > 0 && (
                <div>
                    <h2 className='poppins-bold'>{days}</h2>
                    <h5>DAYS</h5>
                </div>

            )}

                <div>
                    <h2 className='poppins-bold'>{hours.toString().padStart(2, '0')}</h2>
                    <h5>HOURS</h5>
                </div>

                <div>
                    <h2 className='poppins-bold'>{minutes.toString().padStart(2, '0')}</h2>
                    <h5>MINUTES</h5>
                </div>

                <div>
                    <h2 className='poppins-bold'>{seconds.toString().padStart(2, '0')}</h2>
                    <h5>SECONDS</h5>
                </div>
            </section>

            <h6>PLEASE SUBSCRIBE TO NEWSLETTER TO GET UPDATE FROM US</h6>

            <form className='form'>
                <input type="email" name="" id="" placeholder='Email Address'/>
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Main