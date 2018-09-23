import React from 'react';
function Moon(x=200, y=50) {
  return (
    <g className='moon-component' transform={`translate(${x},${y}) scale(1.5)`}>
      <path d="M50 20A40 40 0 1 0 50 70 30 30 0 1 1 50 20z" className="dark-yellow"/>
    </g>
  )
}
export {Moon}
