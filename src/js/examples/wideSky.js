import React from 'react';
import {Cloud} from './cloud.js';
import {Person} from './person.js';
import {Plane} from './plane.js';
import {Rainbow} from './rainbow.js';
import {Shuttle} from './shuttle.js';
import {Wave} from './wave.js';
import {randomNumberBetween, randomNumberBetweenMaxMin} from '../utilities/randomNumberBetween.js';

export const WideSky = () => {
  const cloudArray = [];
  for(let i = 0; i < 5; i++) {
    cloudArray.push({x: randomNumberBetween(600), y:randomNumberBetween(200), scale:randomNumberBetweenMaxMin(2,1)})
  }
  return (
    <g className='wide-sky-component'>
      <rect className="light-blue" x="0" y="0" width="100%" height="100%"/>
      { cloudArray.map(({x,y,scale}, key) =>
        <use x={x} y={y} transform={`scale(${scale})`} href="#cloud" fill="url('#cloud')" key={key} /> ) }

      <use x="50"  y="50" href="#sun"  fill="url('#sun')"  />
      <use x="800" y="50" href="#moon" fill="url('#moon')" />

      <use x="444" y="200" href="#plane" fill="url('#plane')" />

      { false && Wave() }
    </g>
  )
}
