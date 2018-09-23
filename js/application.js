import React from 'react';
import {WideSky} from './examples';

class Application extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <svg>
        { WideSky() }
      </svg>
    );
  }
}
export {Application}
