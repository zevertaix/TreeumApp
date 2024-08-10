import * as React from "react";
import { SvgXml } from "react-native-svg";

const OpenEyeSVG = ({ width, height }: { width?: number; height?: number }) => {
  const xml = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#6B7180"/>
<path d="M2.41976 12.7132C2.28357 12.4975 2.21548 12.3897 2.17736 12.2234C2.14873 12.0985 2.14873 11.9015 2.17736 11.7766C2.21548 11.6103 2.28357 11.5025 2.41976 11.2868C3.54516 9.50484 6.89503 5 12 5C17.105 5 20.4549 9.50484 21.5803 11.2868C21.7165 11.5025 21.7846 11.6103 21.8227 11.7766C21.8513 11.9015 21.8513 12.0985 21.8227 12.2234C21.7846 12.3897 21.7165 12.4975 21.5803 12.7132C20.4549 14.4952 17.105 19 12 19C6.89503 19 3.54516 14.4952 2.41976 12.7132Z" stroke="#6B7180" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3432 9 9.00004 10.3431 9.00004 12C9.00004 13.6569 10.3432 15 12 15Z" stroke="#6B7180" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;

  return <SvgXml xml={xml} width={width || 22} height={height || 22} />;
};

export default OpenEyeSVG;
