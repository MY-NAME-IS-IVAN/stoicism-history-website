import './PicturesWall.css';
import React from 'react';

export const PicturesWall = () => {
  return (
    <div className='pictures-wall'>
      <div className='blured-background'>
        <h2>Stoic Quotes from Philosophers</h2>
        <ul className='squares-container'>
          <li className='square quote'>
            <p>
              "No loss should be more regrettable to us than losing our time,
              for it's irretrievable.”
            </p>
            <p className='author'>- Zeno of Citium</p>
          </li>
          <li className='square quote'>
            <p>"You can commit injustice by doing nothing.”</p>
            <p className='author'>- Diogenes</p>
          </li>
          <li className='square quote'>
            <p>"Wealth is the slave of a wise man. The master of a fool.”</p>
            <p className='author'>- Seneca</p>
          </li>
          <li className='square quote'>
            <p>"Man conquers the world by conquering himself.”</p>
            <p className='author'>- Zeno of Citium</p>
          </li>
          <li className='square quote'>
            <p>"He needs little who desires but little.”</p>
            <p className='author'>- Cleanthes</p>
          </li>
          <li className='square quote'>
            <p>
              "You have power over your mind—not outside events. Realize this,
              and you will find strength.”
            </p>
            <p className='author'>- Marcus Aurelius</p>
          </li>
          <li className='square quote'>
            <p>“Luck is what happens when preparation meets opportunity.”</p>
            <p className='author'>- Seneca</p>
          </li>
          <li className='square quote'>
            <p>
              “It's not enough to be busy; so are the ants. The question is:
              what are we busy about?”
            </p>
            <p className='author'>- Henry David Thoreau</p>
          </li>
          <li className='square quote'>
            <p>
              “How long are you going to wait before you demand the best for
              yourself?”
            </p>
            <p className='author'>- Epictetus</p>
          </li>
          <li className='square quote'>
            <p>“More is lost by indecision than wrong decision.”</p>
            <p className='author'>- Marcus Tullius Cicero</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
