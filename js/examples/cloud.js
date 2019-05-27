// @flow
import * as React from 'react';
function Cloud(): React.Node {
  return (
    <g id="cloud" className='cloud'>
      <path className="sky cloud outline" d={`M120,70
H30,
C0,70 0,40 30,40
C10,15 55,-10 65,30
C60,0 95,-10 100,20
C130,10 125,35 120,40
L120,40
C150,40 150,70 120,70
Z`} />
    </g>
  );
}
export default Cloud
