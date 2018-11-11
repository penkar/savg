import React from 'react';
function Moon() {
  return (
    <g id="moon" className='moon-component' transform="scale(1.5)">
      <path d="M50 20A40 40 0 1 0 50 70 30 30 0 1 1 50 20z" className="dark-yellow"/>
    </g>
  )
}
export default Moon
