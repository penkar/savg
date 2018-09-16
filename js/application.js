import React from 'react';

class Application extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  render() {
    return (
      <svg style={{height:'100vh', width:'100vw'}}>
        <polygon points="100,10 40,198 190,78 10,78 160,198" style={{fill:'grey',stroke:'orange',strokeWidth:5,fillRule:'evenodd'}} />
      </svg>
    )
  }
}
export {Application}
