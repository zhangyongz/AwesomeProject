import React, {useState} from 'react';
import {Animated} from 'react-native';

const StickyHeader = props => {
  const [stickyLayoutY, setStickyLayoutY] = useState(0);
  // 函数可以提出去
  const _onLayout = event => {
    setStickyLayoutY(event.nativeEvent.layout.y);
  };

  const {
    stickyHeaderY = -1,
    stickyScrollY = new Animated.Value(0),
    children,
    style,
    offsetTop = 0,
  } = props;

  const y = stickyHeaderY !== -1 ? stickyHeaderY : stickyLayoutY;
  const translateY = stickyScrollY.interpolate({
    inputRange: [-offsetTop - 1, -offsetTop, y - offsetTop, y - offsetTop + 1],
    outputRange: [0, 0, 0, 1],
    // inputRange: [-1, 0, y, y + 1],
    // outputRange: [0, 0, 0, 1],
    // inputRange: [-51, -50, y - 50, y - 49],
    // outputRange: [0, 0, 0, 1],
  });
  return (
    <Animated.View
      onLayout={_onLayout}
      style={[style, {zIndex: 100, transform: [{translateY}]}]}>
      {children}
    </Animated.View>
  );
};

export default StickyHeader;
