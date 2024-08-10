import * as React from "react";
import { SvgXml } from "react-native-svg";

const CloseEyeSVG = ({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) => {
  const xml = `
 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M9 12.0002C9 13.6571 10.3431 15.0002 12 15.0002C12.8284 15.0002 13.5784 14.6644 14.1213 14.1215L9.87868 9.87891C9.33579 10.4218 9 11.1718 9 12.0002Z" fill="#6B7180"/>
<path d="M10.7426 5.09232C11.149 5.03223 11.5682 5 12 5C17.1051 5 20.4549 9.50484 21.5803 11.2868C21.7165 11.5025 21.7846 11.6103 21.8228 11.7767C21.8514 11.9016 21.8514 12.0987 21.8227 12.2236C21.7846 12.3899 21.716 12.4985 21.5788 12.7156C21.279 13.1901 20.8218 13.8571 20.2161 14.5805M6.72396 6.71504C4.56188 8.1817 3.09408 10.2194 2.42074 11.2853C2.28392 11.5019 2.21551 11.6102 2.17737 11.7765C2.14873 11.9014 2.14872 12.0984 2.17735 12.2234C2.21546 12.3897 2.28356 12.4975 2.41977 12.7132C3.54518 14.4952 6.89505 19 12 19C14.0585 19 15.8315 18.2676 17.2885 17.2766M3.00005 3L21 21M9.87873 9.87868C9.33584 10.4216 9.00005 11.1716 9.00005 12C9.00005 13.6569 10.3432 15 12 15C12.8285 15 13.5785 14.6642 14.1214 14.1213" stroke="#6B7180" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={width || 22} height={height || 22} />;
};

export default CloseEyeSVG;
