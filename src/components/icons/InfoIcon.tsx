import React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

const InfoIcon = () => (
  <Svg
    style={{ marginLeft: 2 }}
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16">
    <G fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path
        fill="#27C07D"
        d="M1.6 2.646v4.152c0 6.46 5.732 8.535 6.229 8.535.496 0 6.228-2.076 6.228-8.535V2.646S8.751.8 7.83.8C6.906.8 1.6 2.646 1.6 2.646Zm6.229 1.913a.068.068 0 1 0 0-.136.068.068 0 0 0 0 .136Zm0-.876a.807.807 0 1 0 0 1.615.807.807 0 0 0 0-1.615Zm0 8.604a.875.875 0 0 1-.875-.875V7.72a.875.875 0 0 1 1.75 0v3.69a.875.875 0 0 1-.875.876Z"
      />
      <Path
        fill="#fff"
        d="M7.896 4.491a.068.068 0 1 1-.135 0 .068.068 0 0 1 .135 0Zm-.875 0a.807.807 0 1 1 1.615 0 .807.807 0 0 1-1.615 0Zm-.067 6.92a.875.875 0 1 0 1.75 0v-3.69a.875.875 0 1 0-1.75 0v3.69Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default InfoIcon;
