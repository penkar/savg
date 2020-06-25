import React from 'react';

export default function Office() {
  return (
    <g id="office-component" className="office-component">
      <rect className="sky" x="0" y="0" height="250" width="210"/>
      <rect className="gray" x="35" y="25" height="225" width="140"/>
      { [40,60,80,100,120,140,160].map(
        (x,i) => <rect key={i + '1'} className="sky" x={x} y="30" height="8" width="10" />) }
      { [40,60,80,100,120,140,160].map(
        (x,i) => <rect key={i + '2'} className="sky" x={x} y="60" height="8" width="10" />) }
      { [40,60,80,100,120,140,160].map(
        (x,i) => <rect key={i + '3'} className="sky" x={x} y="90" height="8" width="10" />) }
      { [40,60,80,100,120,140,160].map(
        (x,i) => <rect key={i + '4'} className="sky" x={x} y="120" height="8" width="10" />) }
      { [40,60,80,100,120,140,160].map(
        (x,i) => <rect key={i + '5'} className="sky" x={x} y="150" height="8" width="10" />) }
      { [40,60,80,100,120,140,160].map(
        (x,i) => <rect key={i + '6'} className="sky" x={x} y="150" height="8" width="10" />) }
      { [40,60,80,100,120,140,160].map(
        (x,i) => <rect key={i + '6'} className="sky" x={x} y="180" height="8" width="10" />) }
      <rect className="sky" x="75" y="245" height="5" width="60"/>
      <rect className="sky" x="85" y="215" height="30" width="40"/>
      <line strokeWidth="3" className="brown" x1="35" y1="249" x2="175" y2="249" />
      <line strokeWidth="2" className="brown" x1="105" y1="214" x2="105" y2="245" />
      <line strokeWidth="1" className="brown" x1="71" y1="245" x2="139" y2="245" />
    </g>
  );
}
