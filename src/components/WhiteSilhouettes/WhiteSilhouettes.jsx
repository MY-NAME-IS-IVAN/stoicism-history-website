import './WhiteSilhouettes.css';
import React from 'react';

import HeadSmall from '../../images/silhouettes/HeadSmall.png';
import NakedGuySmall from '../../images/silhouettes/NakedGuySmall.png';
import StatueAndStandSamll from '../../images/silhouettes/StatueAndStandSmall.png';
import TragedySmall from '../../images/silhouettes/TragedySmall.png';
import WarriorSmall from '../../images/silhouettes/WarriorSmall.png';
import TempleSmall from '../../images/silhouettes/TempleSmall.png';

export const WhiteSilhouettes = () => {
  return (
    <div className='silhouettes-container'>
      <div className='two-sides-container'>
        <div className='pictures-container'>
          <ul className='pictures-list'>
            <li>
              <img className='main-picture' src={HeadSmall} alt='' />
              <img className='glow-picutre' src={HeadSmall} alt='' />
            </li>
            <li>
              <img className='main-picture' src={NakedGuySmall} alt='' />
              <img className='glow-picutre' src={NakedGuySmall} alt='' />
            </li>
            <li>
              <img className='main-picture' src={StatueAndStandSamll} alt='' />
              <img className='glow-picutre' src={StatueAndStandSamll} alt='' />
            </li>
            <li>
              <img className='main-picture' src={TragedySmall} alt='' />
              <img className='glow-picutre' src={TragedySmall} alt='' />
            </li>
            <li>
              <img className='main-picture' src={WarriorSmall} alt='' />
              <img className='glow-picutre' src={WarriorSmall} alt='' />
            </li>
            <li>
              <img className='main-picture' src={TempleSmall} alt='' />
              <img className='glow-picutre' src={TempleSmall} alt='' />
            </li>
          </ul>
        </div>
        <div className='text-container'>
          <h2 className='title'>Stuff</h2>
          <p className='text'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
            doloribus! Porro odit quas nemo eum in. Quisquam rerum reprehenderit
            veritatis fuga facere! Optio nemo quos ipsam, impedit eum voluptatum
            nulla!
          </p>
          <p className='text'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            voluptatum perferendis repellat non sit reprehenderit nam! Aut
            beatae cupiditate quibusdam! Ullam itaque recusandae perspiciatis,
            iste vero earum nesciunt suscipit natus.
          </p>
          <p className='text'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            voluptatum perferendis repellat non sit reprehenderit nam! Aut
            beatae cupiditate quibusdam! Ullam itaque recusandae perspiciatis,
            iste vero earum nesciunt suscipit natus.
          </p>
        </div>
      </div>
    </div>
  );
};
