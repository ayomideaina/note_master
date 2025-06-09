import React from 'react';
import './reviews.css';


const Subscribe = () => {
  return (
    <div className="subscribe">
      {/* <div className="subscribe-bg" /> */}

      <div className="btn-sec">
        <button className='btn-percent'>-10%</button>
      </div>
      <div className="subscribe-sec">
        <h2>Subscribe to enjoy 10% discount on your first order</h2>
        <p className="subscribe-p">
          Stay up-to-date with the latest product releases, promotions,
           and insider news while enjoying savings on your favorite NoteMaster products. 
           Don't miss out - subscribe now and elevate your note-taking experience with NoteMaster!
        </p>
        <div className="sec-input">
            <input type="email" id="mail" placeholder="your@email.com" />
            <input type="button" className="send-btn" value="send" />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
