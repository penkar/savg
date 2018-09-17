import React from 'react';
import {SkyScrapper} from './examples';

class Application extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <SkyScrapper />
  }
}
export {Application}
