import './Introduction.css';
import React from 'react';

import SidePictureSmall from '../../images/introduction/Picture1Small.jpg';
import SidePictureMedium from '../../images/introduction/Picture1Medium.jpg';

const Introduction = () => {
  return (
    <div className='introduction'>
      <div className='information-container'>
        <div className='filter-container'>
          <h1 className='title'>What is Stoicism?</h1>
          <p className='text'>
            Stoicism is an ancient Greek philosophy that focuses on developing
            self-control and resilience to overcome destructive emotions.
            Founded by Zeno of Citium in Athens in the early 3rd century BCE, it
            teaches that virtue (moral excellence) is the highest good and
            sufficient for happiness. Key tenets include living in accordance
            with nature, distinguishing between what is within our control and
            what is not, and maintaining inner peace by accepting what we cannot
            change.
          </p>
          <p className='text'>
            Emerging during the Hellenistic period, Stoicism spread from Athens
            throughout the Greek and Roman worlds, influencing figures like
            Epictetus, Seneca, and Emperor Marcus Aurelius. Its practical
            approach to ethics and emphasis on personal resilience resonated
            widely, particularly amidst the political and social upheavals of
            the time.
          </p>
          <p className='text'>
            Stoicism's influence endures today, offering practical guidance on
            living a virtuous and resilient life. Its principles of emotional
            resilience, control, and acceptance remain relevant, providing tools
            for managing stress and adversity in modern times. The philosophy's
            straightforward approach to achieving inner peace and its focus on
            personal virtue and ethical behavior continue to appeal to many.
          </p>
        </div>
      </div>
      <div className='visual-container'>
        <img
          srcSet={`${SidePictureSmall} 640w, ${SidePictureMedium} 1920w`}
          alt=''
        />
      </div>
    </div>
  );
};

export default Introduction;
