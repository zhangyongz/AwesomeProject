import React, {useRef} from 'react';
import {View, StyleSheet, Text, ScrollView, Animated} from 'react-native';
import StickyHeader from './StickyHeader';

const Table = ({stickyScrollY}) => {
  const thScrollX = useRef(new Animated.Value(0)).current;
  const tbOnScroll = Animated.event(
    [
      {
        nativeEvent: {contentOffset: {x: thScrollX}}, // 记录滑动距离
      },
    ],
    {
      useNativeDriver: true,
      listener: event => {
        console.log(event.nativeEvent.contentOffset.x);
        // console.log(translateX);
        // console.log(typeof translateX);
        // thScrollViewRef.current.scrollTo({
        //   x: event.nativeEvent.contentOffset.x,
        //   y: 0,
        // });
      },
    },
  );

  const translateX = thScrollX.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [1, 0, -1],
    // inputRange: [-1, 0, y, y + 1],
    // outputRange: [0, 0, 0, 1],
    // inputRange: [-51, -50, y - 50, y - 49],
    // outputRange: [0, 0, 0, 1],
  });

  return (
    <>
      <StickyHeader stickyScrollY={stickyScrollY} offsetTop={60}>
        <View style={styles.th}>
          <View style={styles.leftCols}>
            <View style={styles.tr}>
              <View style={[styles.td]}>
                <Text>text0</Text>
              </View>
            </View>
          </View>
          {/* <ScrollView
              horizontal={true}
              scrollEnabled={false}
              ref={thScrollViewRef}> */}
          {/* <ScrollView></ScrollView> */}
          <ScrollView>
            <Animated.View
              style={[styles.rightCols, {transform: [{translateX}]}]}>
              <View style={styles.tr}>
                {/* <View style={styles.thRightCols}> */}
                {new Array(20).fill(1).map((_, index) => {
                  return (
                    <View style={[styles.td]} key={index}>
                      <Text>text{index + 1}</Text>
                    </View>
                  );
                })}
              </View>
              {/* </ScrollView> */}
            </Animated.View>
          </ScrollView>
        </View>
      </StickyHeader>

      <View style={styles.tb}>
        <View style={styles.leftCols}>
          {new Array(20).fill(1).map((_, index) => {
            return (
              <View style={styles.tr} key={index}>
                <View style={[styles.td]} key={index}>
                  <Text>text{index + 1}</Text>
                </View>
              </View>
            );
          })}
        </View>
        <Animated.ScrollView horizontal={true} onScroll={tbOnScroll}>
          <View style={styles.rightCols}>
            {new Array(20).fill(1).map((_, index) => {
              return (
                <View style={styles.tr} key={index}>
                  {new Array(20).fill(1).map((__, index2) => {
                    return (
                      <View style={[styles.td, styles.rightTd]} key={index2}>
                        <Text>text{index2 + 1}</Text>
                      </View>
                    );
                  })}
                </View>
              );
            })}
          </View>
        </Animated.ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  table: {},
  th: {
    // height: 50,
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
  },
  tb: {
    // height: 50,
    // backgroundColor: '#f8f8f8',
    flexDirection: 'row',
  },
  tr: {
    // display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
  },
  // rightCols: {flexDirection: 'row'},
  leftCols: {
    width: 60,
    borderRightWidth: 1,
    borderRightColor: '#f0f0f0',
  },
  rightCols: {},
  td: {
    width: 65,
    padding: 10,
  },
  rightTd: {
    borderRightWidth: 1,
    borderRightColor: '#f0f0f0',
  },
});

export default Table;
