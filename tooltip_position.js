import { useState } from 'react';
import { Dimensions } from 'react-native';

//the hooks me boy
export default function tooltipPosition() {
  const [tooltipInfo, setTooltipInfo] = useState('');
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({});

  const handlePress = (runeInfo, event) => {
    const { pageX, pageY } = event.nativeEvent;
    const tooltipWidth = 200;
    const tooltipHeight = 100;
    let x = pageX;
    let y = pageY;

    if (pageX + tooltipWidth > Dimensions.get('window').width) {
      x = Dimensions.get('window').width - tooltipWidth;
    }
    if (pageY + tooltipHeight > Dimensions.get('window').height) {
      y = pageY - tooltipHeight;
    }

    setTooltipInfo(runeInfo.longDesc);
    setTooltipVisible(true);
    setTooltipPosition({ top: y, left: x });
  };

  return {
    tooltipInfo,
    tooltipVisible,
    tooltipPosition,
    setTooltipVisible,
    handlePress
  };
}
