import { useState } from 'react';
import { Dimensions } from 'react-native'

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

    console.log('runeInfo:', runeInfo);
    console.log('event:', event);
    console.log('x:', x);
    console.log('y:', y);

    setTooltipInfo(runeInfo.longDesc);
    setTooltipVisible(true);
    setTooltipPosition({ top: y, left: x });
  };

  console.log('tooltipInfo:', tooltipInfo);
  console.log('tooltipVisible:', tooltipVisible);
  console.log('tooltipPosition:', tooltipPosition);

  return {
    tooltipInfo,
    tooltipVisible,
    tooltipPosition,
    setTooltipVisible,
    handlePress
  };
}
