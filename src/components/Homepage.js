import React from 'react';
import {Link} from 'react-router-dom';

import {Centered} from './styling/centered'

export const Homepage = () => {
  return (
    <div>
      <Centered>
        <div>
          <h1>
            Homepage
          </h1>
        </div>
      </Centered>
      <Centered>
        <Link to='/liarsdice'>Liars Dice </Link>
      </Centered>
    </div>
  );
};

export default Homepage;
