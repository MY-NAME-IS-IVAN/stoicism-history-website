import './Timeline.css';
import React from 'react';

import GreecePicture from '../../images/timeline/Greece.png';

export const Timeline = () => {
  return (
    <div className='timeline'>
      <div className='content-container'>
        <div>
          <h2 className='title'>Stoicism Timeline</h2>
          <div className='timeline-parts'>
            <ul className='side'>
              <li>
                <p className='number'>1</p>
                <div className='text-container'>
                  <h3>Founding by Zeno of Citium (circa 300 BCE):</h3>
                  <p className='text'>
                    Stoicism was founded in Athens by Zeno of Citium after he
                    was inspired by the teachings of Socrates and the Cynics. He
                    began teaching his philosophy in the Stoa Poikile, a public
                    porch in Athens, from which the philosophy gets its name.
                  </p>
                </div>
              </li>
              <li>
                <p className='number'>3</p>
                <div className='text-container'>
                  <h3>
                    Roman Adoption and Influence (1st century BCE - 2nd century
                    CE):
                  </h3>
                  <p className='text'>
                    Prominent Romans like Seneca, Epictetus, and Marcus Aurelius
                    embraced Stoicism. Seneca wrote extensively on Stoic
                    philosophy, Epictetus taught Stoic principles through his
                    discourses, and Marcus Aurelius recorded his reflections in
                    "Meditations."
                  </p>
                </div>
              </li>
              <li>
                <p className='number'>5</p>
                <div className='text-container'>
                  <h3>Modern Resurgence (20th - 21st century):</h3>
                  <p className='text'>
                    Stoicism experienced a revival in modern times, especially
                    in self-help and therapy. Its practical approach to dealing
                    with adversity and focus on resilience and virtue have made
                    it relevant today, influencing practices like Cognitive
                    Behavioral Therapy (CBT).
                  </p>
                </div>
              </li>
            </ul>
            <div className='separation-line'></div>
            <ul className='side right'>
              <li>
                <div className='text-container'>
                  <h3>Development and Expansion (3rd - 2nd century BCE):</h3>
                  <p className='text'>
                    Stoicism was further developed by Zeno's successors,
                    including Cleanthes and Chrysippus. Chrysippus, in
                    particular, played a significant role in systematizing Stoic
                    doctrines and making Stoicism one of the most influential
                    schools of Hellenistic philosophy.
                  </p>
                </div>
                <p className='number'>2</p>
              </li>
              <li>
                <div className='text-container'>
                  <h3>Middle and Late Antiquity (3rd - 6th century CE):</h3>
                  <p className='text'>
                    Stoicism continued to influence philosophical thought
                    throughout the Roman Empire. Although it gradually declined
                    with the rise of Christianity, Stoic ideas were incorporated
                    into early Christian teachings, especially regarding ethics
                    and the nature of the good life.
                  </p>
                </div>
                <p className='number'>4</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='greece-circle'>
          <img className='greece-picture' src={GreecePicture} alt='' />
        </div>
      </div>
    </div>
  );
};
