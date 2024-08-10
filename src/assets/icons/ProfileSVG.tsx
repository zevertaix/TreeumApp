import * as React from "react";
import { SvgXml } from "react-native-svg";
import colors from "../../theme";

const ProfileSVG = ({
  width,
  height,
  color,
}: {
  width?: number;
  height?: number;
  color?: string;
}) => {
  const xml = `
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_293_1611)">
  <circle cx="12.1249" cy="23.06" r="8.06" stroke=${
    color || colors.primaryText
  } stroke-width="2"/>
  </g>
  <circle cx="12.125" cy="7.25" r="4.25" stroke=${
    color || colors.primaryText
  } stroke-width="2"/>
  <defs>
  <clipPath id="clip0_293_1611">
  <rect width="20" height="8" fill="white" transform="translate(2.125 14)"/>
  </clipPath>
  </defs>
  </svg>
`;

  return <SvgXml xml={xml} width={width || 22} height={height || 22} />;
};

export default ProfileSVG;
