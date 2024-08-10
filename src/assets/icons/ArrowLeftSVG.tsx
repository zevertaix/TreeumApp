import * as React from "react";
import { SvgXml } from "react-native-svg";
import colors from "../../theme";

const ArrowLeftSVG = ({
  width,
  height,
  color,
}: {
  width?: number;
  height?: number;
  color?: string;
}) => {
  const xml = `
  <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.875 2L1.875 9L8.875 16" stroke=${
    color || colors.tertiaryText
  } stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

  return <SvgXml xml={xml} width={width || 22} height={height || 22} />;
};

export default ArrowLeftSVG;
