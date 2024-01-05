import {
    Defs,
    LinearGradient,
    Stop,
    Svg,
    Text as SvgText,
    TSpan,
  } from "react-native-svg";
  import React from "react";


  const GradientText = (props) => {
    //take in family, size and weight of font to be gradient
    const { fontFamily, fontSize, fontWeight } = props.style;

    return (
      <Svg height="100" width="200">
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
          {props.children}
        </SvgText>
      </Svg>
    );
  };
  

  export default GradientText;