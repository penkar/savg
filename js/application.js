import React from 'react';
// import {WideSky} from './examples';
import * as Examples from './examples';

class Application extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <svg>
        <defs>
          { Examples.Cloud() }
          { Examples.Moon() }
          { Examples.Sun() }
          { Examples.Office() }
          { Examples.SkyScrapper() }
        </defs>
        { Examples.WideSky() }
      </svg>
    );
  }
}
export {Application}
