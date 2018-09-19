import React from 'react';
import {SkyScrapper, Office} from './examples';

class Application extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <svg>
        { Office() } 
      </svg>
    );
  }
}
export {Application}
