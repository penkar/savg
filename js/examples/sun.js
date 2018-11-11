import React from 'react';
function Sun() {
  return (
    <g id="sun" className="sun-component">
      <circle cx="50" cy="50" r="70" className="light-yellow" />
      <circle cx="50" cy="50" r="50" className="yellow" />
      <g transform="rotate(45 50 50)" key="rays2">
      { [ {x1:50,x2:50,y1:-35,y2:10},
          {x1:50,x2:50,y1:90,y2:135},
          {x1:-35,x2:10,y1:50,y2:50},
          {x1:90,x2:135,y1:50,y2:50},].map(({x1, x2, y1, y2}, i) =>
          <line x1={x1} x2={x2} y1={y1} y2={y2} className="yellow ray" key={i}/> ) }
      </g>
      <g transform="rotate(0 50 50)" key="rays1">
      { [ {x1:50,x2:50,y1:-35,y2:10},
          {x1:50,x2:50,y1:90,y2:135},
          {x1:-35,x2:10,y1:50,y2:50},
          {x1:90,x2:135,y1:50,y2:50},].map(({x1, x2, y1, y2}, i) =>
          <line x1={x1} x2={x2} y1={y1} y2={y2} className="yellow ray" key={i}/> ) }
      </g>
    </g>
  );
}
export default Sun
