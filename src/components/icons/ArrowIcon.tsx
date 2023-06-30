import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowIcon = () => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24">
    <Path
      stroke="#BBC5CB"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m8 10 4 4 4-4"
    />
  </Svg>
);
export default ArrowIcon;
