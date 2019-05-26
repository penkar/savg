import React from 'react';
// import {WideSky} from './examples';
import * as Examples from './examples';

export default class Application extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <svg>
        <defs>
          { Examples.elements.map((element, index) => 
            <g key={index}>{element()}</g>) }
        </defs>

        { Examples.WideSky() }
      </svg>
    );
  }
}