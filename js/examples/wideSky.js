import React from 'react'
import {Cloud} from './cloud.js'
import {randomNumberBetween, randomNumberBetweenMaxMin} from '../utilities/randomNumberBetween.js';

function WideSky() {
  const cloudArray = new Array;
  for(let i = 0; i < 10; i++) {
    cloudArray.push({x: randomNumberBetween(600), y:randomNumberBetween(200), scale:randomNumberBetweenMaxMin(2,1)})
  }
  return (
    <g className='wide-sky-component'>
      <rect className="light-blue" x="0" y="0" width="900" height="300"/>
      { cloudArray.map(({x,y,scale}, key) => Cloud({x,y,scale, key}))}
    </g>
  )
}
export {WideSky}
