import * as React from 'react';
import {useState} from 'react';
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
  const translateYOrgin = stickyScrollY.interpolate({
    inputRange: [-1, 0, y, y + 1],
    outputRange: [0, 0, 0, 1],
  });
  const translateY = Animated.add(translateYOrgin, offsetTop);
  return (
    <Animated.View
      onLayout={_onLayout}
      style={[style, {zIndex: 100, transform: [{translateY}]}]}>
      {children}
    </Animated.View>
  );
};

export default StickyHeader;
