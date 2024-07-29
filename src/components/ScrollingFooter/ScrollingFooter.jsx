import './ScrollingFooter.css';
import React from 'react';

export const ScrollingFooter = () => {
  return (
    <footer>
      <div className='scroll-text-container'>
        <p className='scroll-text'>
          "How much more grievous are the consequences of anger than the causes
          of it"
        </p>
        <p className='author'>― Marcus Aurelius</p>
      </div>
    </footer>
  );
};
