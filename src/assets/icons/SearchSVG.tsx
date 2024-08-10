import * as React from "react";
import { SvgXml } from "react-native-svg";

const SearchSVG = ({ width, height }: { width?: number; height?: number }) => {
  const xml = `
  <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="11.0251" cy="11.5251" r="7.5" transform="rotate(-45 11.0251 11.5251)" stroke="#0E0E16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.3284 16.8284L21.2781 21.7782" stroke="#0E0E16" stroke-width="2" stroke-linecap="round"/>
  </svg>
`;

  return <SvgXml xml={xml} width={width || 22} height={height || 22} />;
};

export default SearchSVG;
