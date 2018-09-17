import React from 'react';
import {SkyScrapper} from './examples';

class Application extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <svg style={{height:'310px', width:'60px'}}>
        <SkyScrapper />
      </svg>
    );
  }
}
export {Application}
