import * as React from 'react';
import {useState} from 'react';
import {Text, View, StyleSheet, Animated} from 'react-native';

const DynamicHeader = props => {
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
  } = props;

  const y = stickyHeaderY != -1 ? stickyHeaderY : stickyLayoutY;
  const translateY = stickyScrollY.interpolate({
    inputRange: [-1, 0, y, y + 1],
    outputRange: [0, 0, 0, 1],
  });
  return (
    <Animated.View
      onLayout={_onLayout}
      style={[style, {zIndex: 100, transform: [{translateY}]}]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    paddingTop: 10,
    height: 50,
    backgroundColor: 'green',
  },
  headerText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DynamicHeader;
