import React, { useState, useEffect } from 'react';
import asset16 from '../images/asset 16.jpeg';

const Rated = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(intervalId);
        // Optionally, you can perform some action when the countdown is expired
        // For example, set a state indicating that the countdown has expired.
      }
    };

    // Initial call to set the initial timeRemaining state
    updateCountdown();

    // Update the countdown every second
    const intervalId = setInterval(updateCountdown, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className='rated'>
      <div className='container'>
        <div className='dotted dot-1'>
          <div className='dotted dot-2'>
            <div className='dotted dot-3'>
              <div className='dotted dot-4'>
                <div className='dotted dot-5'>
                  <div className='dotted dot-6'>
                    <div className='dotted end-dot'>
                      <div className='rated-img'>
                        <img src={asset16} alt="" />
                      </div>
                      <div className='rated-text'>
                        <h4>SACRIFICIAL CHAIR DESIGN</h4>
                        <p><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star"></i> | 10 review(s) | Add your review</p>
                        <h5><span>$170</span> $69.00</h5>
                        <h6>Size: <span>Large</span></h6>
                        <h6>Color: <span>Grey white & Brown</span></h6>
                        <h6>Dimensions: <span>Height: 13cm x Length: 15cm</span></h6>
                        <div className='countdown'>
                            <h2 className='demo'>
                                {timeRemaining.days}d
                            </h2>
                            <h2 className='demo'>
                                {timeRemaining.hours}h
                            </h2>
                            <h2 className='demo'>
                                {timeRemaining.minutes}m
                            </h2>
                            <h2 className='demo'>
                                {timeRemaining.seconds}s
                            </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rated;
