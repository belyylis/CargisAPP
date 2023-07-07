import React from 'react';
import Svg, { Path } from 'react-native-svg';

const DestinationIcon = () => (
  <Svg width={8} height={16} fill="none" viewBox="0 0 8 16">
    <Path
      fill="#232B2F"
      fillRule="evenodd"
      d="M8 7.5C8 5 6.5 3 4 3S0 5 0 7.5C0 11 3.36 14 4 14c.64 0 4-3 4-6.5Zm-6-.497a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default DestinationIcon;
