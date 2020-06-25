import React from 'react';
import * as Examples from './js/examples';

export default function Application () {
  return (
    <svg>
      <defs>
        { Examples.elements.map((element, index) =>
          <g key={index}>{element()}</g>) }
      </defs>
      { Examples.WideSky() }
    </svg>
  )
}
