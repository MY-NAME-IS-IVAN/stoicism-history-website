import './WhiteSilhouettes.css';
import React, { useState } from 'react';

import MarcusMeditations from '../../images/silhouettes/MarcusMeditations.png';
import MarcusMeditationsWhite from '../../images/silhouettes/MarcusMeditationsWhite.png';
import ZenoStatue from '../../images/silhouettes/ZenoStatue.png';
import ZenoStatueWhite from '../../images/silhouettes/ZenoStatueWhite.png';
import StoaPoikile from '../../images/silhouettes/StoaPoikkile.jpg';
import StoaPoikileWhite from '../../images/silhouettes/StoaPoikkileWhite.jpg';
import BustOfSeneca from '../../images/silhouettes/BustOfSeneca.png';
import BustOfSenecaWhite from '../../images/silhouettes/BustOfSenecaWhite.png';
import SchoolOfAthens from '../../images/silhouettes/SchoolOfAthens.jpg';
import SchoolOfAthensWhite from '../../images/silhouettes/SchoolOfAthensWhite.jpg';
import CatoStatue from '../../images/silhouettes/CatoStatue.png';
import CatoStatueWhite from '../../images/silhouettes/CatoStatueWhite.png';

export const WhiteSilhouettes = () => {
  const itemsInformation = [
    {
      title: 'The Meditations of Marcus Aurelius',
      descriptions:
        '"Meditations" is a series of personal writings by Roman Emperor Marcus Aurelius, where he reflects on his Stoic beliefs and philosophical insights. Written as a source of self-improvement, these writings provide deep insights into Stoic thought and are considered one of the most important texts for understanding Stoicism today.',
    },
    {
      title: 'Statue of Zeno of Citium',
      descriptions:
        'Various statues commemorate Zeno of Citium, the founder of Stoicism. These statues typically depict Zeno in a thoughtful pose, symbolizing his role in establishing the Stoic school of philosophy and his commitment to teaching principles of virtue, wisdom, and self-discipline.',
    },
    {
      title: 'The Stoa Poikile',
      descriptions:
        'The Stoa Poikile, located in the Agora of Athens, is where Zeno of Citium began teaching his Stoic philosophy. The building was named for its painted murals depicting historical and mythological scenes. This location is historically significant as the birthplace of Stoicism, where Zeno and his followers gathered to discuss philosophical ideas.',
    },
    {
      title: 'Bust of Seneca',
      descriptions:
        "Numerous busts of Seneca, the Roman philosopher, and statesman, exist in museums around the world. These busts capture Seneca's likeness and serve as a tribute to his contributions to Stoic philosophy. Seneca's writings and teachings on ethics, morality, and personal resilience remain influential in the study of Stoicism.",
    },
    {
      title: 'The School of Athens by Raphael',
      descriptions:
        "This famous fresco in the Vatican depicts many ancient philosophers, including Zeno of Citium. The fresco symbolizes the influence of Stoic thought within the broader context of classical philosophy. Zeno's inclusion highlights the significance of Stoicism among other major philosophical schools of the time.",
    },
    {
      title: 'Statue of Cato the Younger',
      descriptions:
        "Statues of Cato the Younger can be found in various historical and public collections. These statues commemorate Cato's Stoic virtues, particularly his unwavering commitment to integrity, moral courage, and resistance to tyranny. Cato's life and actions exemplify the practical application of Stoic principles in political and personal contexts.",
    },
  ];

  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  return (
    <div className='silhouettes-container'>
      <div className='background-blur'>
        <div className='two-sides-container'>
          <div className='pictures-container'>
            <ul className='pictures-list'>
              <li>
                <div
                  className={`images-container ${
                    currentItemIndex === 0 ? 'active' : ''
                  }`}
                  onClick={() => setCurrentItemIndex(0)}
                >
                  <img
                    className='white-picture'
                    src={MarcusMeditationsWhite}
                    alt=''
                  />
                  <img
                    className='main-picture'
                    src={MarcusMeditations}
                    alt=''
                  />
                </div>
              </li>
              <li>
                <div
                  className={`images-container ${
                    currentItemIndex === 1 ? 'active' : ''
                  }`}
                  onClick={() => setCurrentItemIndex(1)}
                >
                  <img className='white-picture' src={ZenoStatueWhite} alt='' />
                  <img className='main-picture' src={ZenoStatue} alt='' />
                </div>
              </li>
              <li>
                <div
                  className={`images-container ${
                    currentItemIndex === 2 ? 'active' : ''
                  }`}
                  onClick={() => setCurrentItemIndex(2)}
                >
                  <img
                    className='white-picture'
                    src={StoaPoikileWhite}
                    alt=''
                  />
                  <img className='main-picture' src={StoaPoikile} alt='' />
                </div>
              </li>
              <li>
                <div
                  className={`images-container ${
                    currentItemIndex === 3 ? 'active' : ''
                  }`}
                  onClick={() => setCurrentItemIndex(3)}
                >
                  <img
                    className='white-picture'
                    src={BustOfSenecaWhite}
                    alt=''
                  />
                  <img className='main-picture' src={BustOfSeneca} alt='' />
                </div>
              </li>
              <li>
                <div
                  className={`images-container ${
                    currentItemIndex === 4 ? 'active' : ''
                  }`}
                  onClick={() => setCurrentItemIndex(4)}
                >
                  <img
                    className='white-picture'
                    src={SchoolOfAthensWhite}
                    alt=''
                  />
                  <img className='main-picture' src={SchoolOfAthens} alt='' />
                </div>
              </li>
              <li>
                <div
                  className={`images-container ${
                    currentItemIndex === 5 ? 'active' : ''
                  }`}
                  onClick={() => setCurrentItemIndex(5)}
                >
                  <img className='white-picture' src={CatoStatueWhite} alt='' />
                  <img className='main-picture' src={CatoStatue} alt='' />
                </div>
              </li>
            </ul>
          </div>
          <div className='text-container'>
            <h2 className='title'>
              {itemsInformation[currentItemIndex].title}
            </h2>
            <p className='text'>
              {itemsInformation[currentItemIndex].descriptions}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
