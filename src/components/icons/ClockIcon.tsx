import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ClockIcon = () => (
  <Svg width={16} height={16} fill="none" viewBox="0 0 16 16">
    <Path fill="#BBC5CB" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10Z" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 5.5v2.75l2.5.75"
    />
  </Svg>
);
export default ClockIcon;
