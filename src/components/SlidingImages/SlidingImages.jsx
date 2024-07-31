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
            <div className='info'>
              <h3>Cato</h3>
              <p>
                Cato the Younger was a Roman statesman and Stoic philosopher
                known for his unwavering commitment to Stoic principles. His
                opposition to Julius Caesar exemplified Stoic virtues of courage
                and integrity.
              </p>
            </div>
            <img srcSet={`${CatoSmall} 500w, ${CatoMedium} 1258w`} alt='' />
          </div>
          <div className='picture-container'>
            <div className='info'>
              <h3>Epictetus</h3>
              <p>
                Epictetus was a former slave who became a prominent Stoic
                philosopher, known for his teachings on the importance of inner
                freedom and self-discipline. His discourses, recorded by his
                student Arrian, emphasize the Stoic principles of focusing on
                what is within our control and accepting what is not.
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
                Marcus Aurelius was a Roman emperor and Stoic philosopher whose
                personal writings, known as "Meditations," reflect his
                application of Stoic principles to leadership and daily life.
                His work emphasizes the importance of virtue, rationality, and
                acceptance of fate, embodying key aspects of Stoic thought.
              </p>
            </div>
            <img srcSet={`${MarcusSmall} 640w, ${MarcusMedium} 1920`} alt='' />
          </div>
          <div className='picture-container'>
            <div className='info'>
              <h3>Porcia</h3>
              <p>
                Porcia Catonis, the daughter of the Roman Stoic philosopher Cato
                the Younger, is often associated with Stoicism through her
                father's influence. Known for her strength and Stoic resolve,
                she exemplified Stoic virtues of courage and endurance,
                particularly in her loyalty and support to her husband, Brutus.
              </p>
            </div>
            <img srcSet={`${PorciaSmall} 360w, ${PorciaMedium} 1200`} alt='' />
          </div>
          <div className='picture-container'>
            <div className='info'>
              <h3>Rufus</h3>
              <p>
                Musonius Rufus was a Roman Stoic philosopher and teacher, known
                for his emphasis on Stoic ethics and practical philosophy. He
                influenced notable students like Epictetus, advocating for the
                application of Stoic principles to everyday life and the pursuit
                of virtue.
              </p>
            </div>
            <img src={Rufus} alt='' />
          </div>
          <div className='picture-container'>
            <div className='info'>
              <h3>Cato</h3>
              <p>
                Cato the Younger was a Roman statesman and Stoic philosopher
                known for his unwavering commitment to Stoic principles. His
                opposition to Julius Caesar exemplified Stoic virtues of courage
                and integrity.
              </p>
            </div>
            <img srcSet={`${CatoSmall} 500w, ${CatoMedium} 1258w`} alt='' />
          </div>
          <div className='picture-container'>
            <div className='info'>
              <h3>Epictetus</h3>
              <p>
                Epictetus was a former slave who became a prominent Stoic
                philosopher, known for his teachings on the importance of inner
                freedom and self-discipline. His discourses, recorded by his
                student Arrian, emphasize the Stoic principles of focusing on
                what is within our control and accepting what is not.
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
