import React from 'react';

class SkyScrapper extends React.Component {
  render() {
    return (
      <svg style={{height:'310px', width:'60px'}}>
        <rect fill="#69C8C3" x="0" y="0" height="310" width="60"/>
        <line stroke-width="3" stroke="#62381B" x1="15" y1="69" x2="45" y2="69" />
        <rect fill="#62381B" x="20" y="50" height="20" width="20"/>
        <rect fill="#F15C27" x="24" y="57" height="8" width="12"/>
        <rect fill="#ffffff" x="25" y="59" height="4.5" width="10"/>

        <rect fill="#F15C27" x="20" y="68" height="230" width="20"/>
        <rect fill="#ffffff" x="22" y="72" height="10" width="16"/>

        <line stroke-width="1" stroke="#62381B" x1="22" y1="84" x2="22" y2="300" />
        <line stroke-width="1" stroke="#62381B" x1="26" y1="84" x2="26" y2="300" />
        <line stroke-width="1" stroke="#62381B" x1="30" y1="84" x2="30" y2="300" />
        <line stroke-width="1" stroke="#62381B" x1="34" y1="84" x2="34" y2="300" />
        <line stroke-width="1" stroke="#62381B" x1="38" y1="84" x2="38" y2="300" />

        <polygon fill="#62381B" points={"20,50 40,50 30,10"}/>
        <line stroke-width="3" stroke="#F15C27" x1="18" y1="53" x2="42" y2="53" />

        <ellipse fill="#A0BF3B" cx="30" cy="310" rx="40" ry="25" />
      </svg>
    )
  }
}
export {SkyScrapper}
