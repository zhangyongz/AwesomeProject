import React from 'react';
import {Animated, StyleSheet} from 'react-native';

const StickyHeaderWrapper = props => {
  return (
    <Animated.ScrollView
      style={styles.scrollView}
      onScroll={
        Animated.event(
          [
            {
              nativeEvent: {contentOffset: {y: props.scrollY}}, // 记录滑动距离
            },
          ],
          {
            useNativeDriver: true,
            // listener: event => console.log(event.nativeEvent.contentOffset.y),
          },
        ) // 使用原生动画驱动
      }
      scrollEventThrottle={1}>
      {props.children}
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
});

export default StickyHeaderWrapper;
