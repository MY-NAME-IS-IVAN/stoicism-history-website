import './StartScreen.css';
import React, { useState } from 'react';

export const StartScreen = () => {
  const [screenToDisappear, setScreenToDisappear] = useState(false);

  return (
    <div
      className={`start-quote-screen ${screenToDisappear ? 'disappear' : ''}`}
      onClick={() => setScreenToDisappear(true)}
    >
      <p className='click-to-continue'>Click To Continue</p>
      <div className='start-quote'>
        <div className='quote-line'>
          <div className='line-text'>
            <p>Waste no more time</p>
            <p className='line-text-white'>Waste no more time</p>
          </div>
          <div className='black-stand'></div>
        </div>
        <div className='quote-line'>
          <p className='line-text'>arguing what</p>
          <div className='black-stand'></div>
        </div>
        <div className='quote-line'>
          <p className='line-text'>a good man should be.</p>
          <div className='black-stand'></div>
        </div>
        <div className='quote-line'>
          <div className='line-text'>
            <p>Be One.</p>
            <p className='line-text-white'>Be One.</p>
          </div>
          <div className='black-stand'></div>
        </div>
      </div>
      <p className='author'>- Marcus Aurelius</p>
    </div>
  );
};
