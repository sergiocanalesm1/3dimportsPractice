/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-fragments */
import react from 'react';

import { Fragment } from 'react';
import Book from './Book';
import Chalkboard from './Chalkboard';
import Newspaper from './Newspaper';
import PersonalXP from './PersonalXP';
import Theater from './Theater';
import Video from './Video';
import Videogame from './Videogame';
import Vinyl from './Vinyl';

const rad = 10;
export default function OriginComponents() {
  return (
    <Fragment>
      <Chalkboard position={[0, 0, -rad]} />
      <Newspaper
        position={[
          rad * Math.cos(Math.PI / 4),
          0,
          -rad * Math.sin(Math.PI / 4),
        ]}
      />
      <Vinyl position={[rad, 0, 0]} scale={[3, 3, 3]} />
      <Book
        position={[rad * Math.cos(Math.PI / 4), 0, rad * Math.sin(Math.PI / 4)]}
      />
      <Videogame position={[0, 0, rad]} />
      <PersonalXP
        position={[
          -rad * Math.cos(Math.PI / 4),
          0,
          rad * Math.sin(Math.PI / 4),
        ]}
        scale={[0.5, 0.5, 0.5]}
      />
      <Theater position={[-rad, 0, 0]} />
      <Video
        position={[
          -rad * Math.cos(Math.PI / 4),
          0,
          -rad * Math.sin(Math.PI / 4),
        ]}
        scale={[0.75, 0.75, 0.75]}
      />
    </Fragment>
  );
}
