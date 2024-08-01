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
      <div className='background-filter'>
        <div className='slide-line'>
          <div className='picture-container'>
            <h3 className='small-display-name'>Cato</h3>
            <div className='info'>
              <h3>Cato</h3>
              <p>
                Cato the Younger was a Roman statesman and Stoic philosopher
                known for his unwavering commitment to Stoic virtues,
                particularly his moral integrity and resistance to tyranny.
              </p>
            </div>
            <img srcSet={`${CatoSmall} 500w, ${CatoMedium} 1258w`} alt='' />
          </div>
          <div className='picture-container'>
            <h3 className='small-display-name'>Epictetus</h3>
            <div className='info'>
              <h3>Epictetus</h3>
              <p>
                Epictetus was a former slave who became a prominent Stoic
                philosopher, teaching the importance of inner freedom and
                focusing on what is within our control.
              </p>
            </div>
            <img
              srcSet={`${EpictetusSmall} 622w, ${EpictetusMedium} 1866w`}
              alt=''
            />
          </div>
          <div className='picture-container'>
            <h3 className='small-display-name'>Marcus</h3>
            <div className='info'>
              <h3>Marcus</h3>
              <p>
                Marcus Aurelius was a Roman emperor and Stoic philosopher known
                for his work "Meditations," which reflects his application of
                Stoic principles to leadership and personal life.
              </p>
            </div>
            <img srcSet={`${MarcusSmall} 640w, ${MarcusMedium} 1920`} alt='' />
          </div>
          <div className='picture-container'>
            <h3 className='small-display-name'>Porcia</h3>
            <div className='info'>
              <h3>Porcia</h3>
              <p>
                Porcia Catonis, the daughter of the Stoic philosopher Cato the
                Younger, exemplified Stoic virtues of courage and endurance,
                particularly in her loyalty and support to her husband Brutus.
              </p>
            </div>
            <img srcSet={`${PorciaSmall} 360w, ${PorciaMedium} 1200`} alt='' />
          </div>
          <div className='picture-container'>
            <h3 className='small-display-name'>Rufus</h3>
            <div className='info'>
              <h3>Rufus</h3>
              <p>
                Musonius Rufus was a Roman Stoic philosopher who emphasized
                practical ethics and influenced notable students like Epictetus
                with his teachings on applying Stoic principles to daily life.
              </p>
            </div>
            <img src={Rufus} alt='' />
          </div>
          <div className='picture-container'>
            <h3 className='small-display-name'>Cato</h3>
            <div className='info'>
              <h3>Cato</h3>
              <p>
                Cato the Younger was a Roman statesman and Stoic philosopher
                known for his unwavering commitment to Stoic virtues,
                particularly his moral integrity and resistance to tyranny.
              </p>
            </div>
            <img srcSet={`${CatoSmall} 500w, ${CatoMedium} 1258w`} alt='' />
          </div>
          <div className='picture-container'>
            <h3 className='small-display-name'>Epictetus</h3>
            <div className='info'>
              <h3>Epictetus</h3>
              <p>
                Epictetus was a former slave who became a prominent Stoic
                philosopher, teaching the importance of inner freedom and
                focusing on what is within our control.
              </p>
            </div>
            <img
              srcSet={`${EpictetusSmall} 622w, ${EpictetusMedium} 1866w`}
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};
