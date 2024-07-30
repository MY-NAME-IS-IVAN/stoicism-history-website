import './SlidingImages.css';

import React from 'react';

import EpictetusSmall from '../../images/sliding-images/EpictetusSmall.jpg';
import EpictetusMedium from '../../images/sliding-images/EpictetusMedium.jpg';

import MarcusSmall from '../../images/sliding-images/MarcusSmall.jpg';
import MarcusMedium from '../../images/sliding-images/MarcusMedium.jpg';

import PorciaSmall from '../../images/sliding-images/PorciaSmall.jpg';
import PorciaMedium from '../../images/sliding-images/PorciaMedium.jpg';

import Rufus from '../../images/sliding-images/Rufus.jpg';

import CatoSmall from '../../images/sliding-images/CatoSmall.jpg';
import CatoMedium from '../../images/sliding-images/CatoMedium.jpg';

export const SlidingImages = () => {
  return (
    <div className='slide-line-container'>
      <div className='slide-line'>
        <div className='picture-container'>
          <div className='info'>
            <h3>Cato</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur quidem voluptate labore quaerat cumque obcaecati
              nihil,
            </p>
          </div>
          <img srcSet={`${CatoSmall} 500w, ${CatoMedium} 1258w`} alt='' />
        </div>
        <div className='picture-container'>
          <div className='info'>
            <h3>Epictetus</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur quidem voluptate labore quaerat cumque obcaecati
              nihil,
            </p>
          </div>
          <img
            srcSet={`${EpictetusSmall} 622w, ${EpictetusMedium} 1866w`}
            alt=''
          />
        </div>
        <div className='picture-container'>
          <div className='info'>
            <h3>Marcus</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur quidem voluptate labore quaerat cumque obcaecati
              nihil,
            </p>
          </div>
          <img srcSet={`${MarcusSmall} 640w, ${MarcusMedium} 1920`} alt='' />
        </div>
        <div className='picture-container'>
          <div className='info'>
            <h3>Porcia</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur quidem voluptate labore quaerat cumque obcaecati
              nihil,
            </p>
          </div>
          <img srcSet={`${PorciaSmall} 360w, ${PorciaMedium} 1200`} alt='' />
        </div>
        <div className='picture-container'>
          <div className='info'>
            <h3>Rufus</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur quidem voluptate labore quaerat cumque obcaecati
              nihil,
            </p>
          </div>
          <img src={Rufus} alt='' />
        </div>
        <div className='picture-container'>
          <div className='info'>
            <h3>Cato</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur quidem voluptate labore quaerat cumque obcaecati
              nihil,
            </p>
          </div>
          <img srcSet={`${CatoSmall} 500w, ${CatoMedium} 1258w`} alt='' />
        </div>
        <div className='picture-container'>
          <div className='info'>
            <h3>Epictetus</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur quidem voluptate labore quaerat cumque obcaecati
              nihil,
            </p>
          </div>
          <img
            srcSet={`${EpictetusSmall} 622w, ${EpictetusMedium} 1866w`}
            alt=''
          />
        </div>
      </div>
    </div>
  );
};
