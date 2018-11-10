import React from 'react'
function Wave() {
  // const width = screen.width;

  return (
    <g className='wave-component' style={{transform:`translate(0%, 100%)`}}>
      <path className="purple" d={`m0,0 v-75 c0,-40 0,-40 100,-40 v75 z`}/>
    </g>
  )
}
export {Wave}
