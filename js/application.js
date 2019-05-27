// @flow
import * as React from 'react';// import {WideSky} from './examples';
import * as Examples from './examples';

const Application = (): React.Node => (
  <svg>
    <defs>
      { Examples.elements.map((element, index) => 
        <g key={index}>{element()}</g>) }
    </defs>

    { Examples.WideSky() }
  </svg>
)
export default Application;
