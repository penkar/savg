// @flow
import * as React from 'react';
function Plane(): React.Node {
  return (
    <g id="plane">
      <path d={`m0,0 h40 v20 z`} fill="black"/>
    </g>
  );
}
export default Plane
