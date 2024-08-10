import * as React from "react";
import { SvgXml } from "react-native-svg";

const CrossSVG = ({ width, height }: { width?: number; height?: number }) => {
  const xml = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.5 4.5L12 12M19.5 19.5L12 12M12 12L4.5 19.5L19.5 4.5" stroke="#0E0E16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

  return <SvgXml xml={xml} width={width || 22} height={height || 22} />;
};

export default CrossSVG;
