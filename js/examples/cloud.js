import React from 'react'
function Cloud() {
  return(
    <g className='cloud-component'>
      <rect className="light-blue" x="0" y="0" width="150" height="100"/>
      <path className="sky cloud" d={`M120,90 H30,
        C0,90 0,60 30,60
        C10,25 65,0 75,50
        C60,40 80,10 100,40
        C150,20 120,80 120,60
        L120,60
        C150,60 150,90 120,90 Z`} />
    </g>
  );
}
export {Cloud}
