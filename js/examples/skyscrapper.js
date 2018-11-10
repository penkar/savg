import React from 'react';
function SkyScrapper() {
  return (
    <g id="sky-scrapper-component" className="sky-scrapper-component">
      <rect className="sky" x="0" y="0" height="310" width="60"/>
      <line strokeWidth="3" className="brown" x1="15" y1="69" x2="45" y2="69" />
      <rect className="brown" x="20" y="50" height="20" width="20"/>
      <rect className="orange" x="24" y="57" height="10" width="12"/>
      <rect className="white" x="25" y="59" height="6.5" width="10"/>
      <rect className="orange" x="20" y="71" height="230" width="20"/>
      <rect className="white" x="22" y="72" height="10" width="16"/>
      <path className="brown strokeHalf" d="M24 81 v-6 c 0 -2, 2 -2, 2 0 v6 z"/>
      <path className="brown strokeHalf" d="M29 81 v-6 c 0 -2, 2 -2, 2 0 v6 z"/>
      <path className="brown strokeHalf" d="M34 81 v-6 c 0 -2, 2 -2, 2 0 v6 z"/>
      <line strokeWidth="1" className="brown" x1="22" y1="84" x2="22" y2="300" />
      <line strokeWidth="1" className="brown" x1="26" y1="84" x2="26" y2="300" />
      <line strokeWidth="1" className="brown" x1="30" y1="84" x2="30" y2="300" />
      <line strokeWidth="1" className="brown" x1="34" y1="84" x2="34" y2="300" />
      <line strokeWidth="1" className="brown" x1="38" y1="84" x2="38" y2="300" />
      <polygon className="brown" points="20,50 40,50 30,10"/>
      <line strokeWidth="3" className="orange" x1="18" y1="53" x2="42" y2="53" />
      <ellipse className="green" cx="30" cy="310" rx="40" ry="25" />
      <line strokeWidth="3" className="brown" y1="285" y2="285" x1="16" x2="44"></line>
    </g>
  )
}
export {SkyScrapper}
