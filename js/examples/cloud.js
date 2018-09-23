import React from 'react'
function Cloud({fill="sky", x=0, y=0, scale=1, key=Math.random()}) {
  return(
    <g className='cloud-component' transform={`translate(${x},${y}) scale(${scale})`} key={key}>
      <path className={`${fill} cloud outline`} d={`M120,70 H30, C0,70 0,40 30,40 C10,15 55,-10 65,30 C60,0 95,-10 100,20 C130,10 125,35 120,40 L120,40 C150,40 150,70 120,70 Z`} />
    </g>
  );
}
export {Cloud}
