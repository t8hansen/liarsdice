/* eslint-disable linebreak-style */
import React from 'react';
import {Link} from 'react-router-dom';

import {Centered} from '../styling/centered';

import {rollDie} from './rollDie';
import one from '../../photos/1.gif';
import two from '../../photos/2.jpg';
import three from '../../photos/3.gif';
import four from '../../photos/4.gif';
import five from '../../photos/5.gif';
import six from '../../photos/6.gif';

const getPhoto = (number, i) => {
  if (number === 1) {
    return <img key={i} src={one} alt='one' height={100} width={100} />;
  } else if (number === 2) {
    return <img key={i} src={two} alt='two'height={100} width={100} />;
  } else if (number === 3) {
    return <img key={i} src={three} alt='three'height={100} width={100} />;
  } else if (number === 4) {
    return <img key={i} src={four} alt='four'height={100} width={100} />;
  } else if (number === 5) {
    return <img key={i} src={five} alt='five'height={100} width={100} />;
  } else if (number === 6) {
    return <img key={i} src={six} alt='six'height={100} width={100} />;
  }
};


export const LiarsDiceDisplay = () => {
  return (
    <div>
      <Link to='/'>Homepage</Link>
      <Centered>
        <h1>
        Liars Dice
        </h1>
      </Centered>
      <Centered>
        <div>
          {rollDie(5).map((number, i) => {
            return (getPhoto(number, i));
          })}
        </div>
      </Centered>
    </div>
  );
};

export default LiarsDiceDisplay;
