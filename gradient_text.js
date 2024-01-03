// gradient_text.js
import React from "react";
import { Defs, LinearGradient, Stop, Svg, Text as SvgText } from "react-native-svg";

const GradientText = ({ style, children }) => {
  const { fontFamily, fontSize, fontWeight } = style;

  return (
    <Svg height={fontSize * 1.5} width={200}>
      <Defs>
        <LinearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <Stop offset="0%" stopColor="#ab80c8" />
          <Stop offset="100%" stopColor="#acbc" />
        </LinearGradient>
      </Defs>
      <SvgText
        fill="url(#gradient)"
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        x="50%"
        y="50%"
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        {children}
      </SvgText>
    </Svg>
  );
};

export default GradientText;
