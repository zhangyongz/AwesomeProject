/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  SectionList,
  StatusBar,
  ScrollView,
  Animated,
} from 'react-native';
import {Tab, Text, TabView, Icon} from '@rneui/themed';
import StickyHeader from './js/components/StickyHeader';
import {DATA} from './data';

const App = () => {
  const [index, setIndex] = useState(0);
  let scrollY = useRef(new Animated.Value(0)).current;
  let [headHeight, setHeadHeight] = useState(-1);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.ScrollView
        style={{flex: 1}}
        onScroll={
          Animated.event(
            [
              {
                nativeEvent: {contentOffset: {y: scrollY}}, // 记录滑动距离
              },
            ],
            {useNativeDriver: true},
          ) // 使用原生动画驱动
        }
        scrollEventThrottle={1}>
        <View
          onLayout={e => {
            let {height} = e.nativeEvent.layout;
            setHeadHeight(height); // 给头部高度赋值
          }}>
          {DATA.map((book, index) => {
            return (
              <Text style={styles.scrollText} key={book.id}>
                {book.title}
              </Text>
            );
          })}
          {/* // 里面放入第一部分组件 */}
        </View>
        <StickyHeader
          stickyHeaderY={headHeight} // 把头部高度传入
          stickyScrollY={scrollY} // 把滑动距离传入
        >
          <Tab
            value={index}
            onChange={e => setIndex(e)}
            indicatorStyle={{
              backgroundColor: 'white',
              height: 3,
            }}
            variant="primary">
            <Tab.Item
              title="Recent"
              titleStyle={{fontSize: 12}}
              icon={{name: 'timer', type: 'ionicon', color: 'white'}}
            />
            <Tab.Item
              title="favorite"
              titleStyle={{fontSize: 12}}
              icon={{name: 'heart', type: 'ionicon', color: 'white'}}
            />
            <Tab.Item
              title="cart"
              titleStyle={{fontSize: 12}}
              icon={{name: 'cart', type: 'ionicon', color: 'white'}}
            />
          </Tab>
          {/* // 里面放入第二部分组件 */}
        </StickyHeader>
        {DATA.map((book, index) => {
          return (
            <Text style={styles.scrollText} key={book.id}>
              {book.title}
            </Text>
          );
        })}
        {DATA.map((book, index) => {
          return (
            <Text style={styles.scrollText} key={book.id}>
              {book.title}
            </Text>
          );
        })}
        {DATA.map((book, index) => {
          return (
            <Text style={styles.scrollText} key={book.id}>
              {book.title}
            </Text>
          );
        })}
        {/* // 这是第三部分的列表组件 */}
        {/* <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => this._createListItem(item)}
        /> */}
      </Animated.ScrollView>
      {/* <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
          {useNativeDriver: false},
        )}>
        {DATA.map((book, index) => {
          return (
            <Text style={styles.scrollText} key={book.id}>
              {book.title}
            </Text>
          );
        })}
        <DynamicHeader animHeaderValue={scrollOffsetY} />
        {DATA.map((book, index) => {
          return (
            <Text style={styles.scrollText} key={book.id}>
              {book.title}
            </Text>
          );
        })}
        {DATA.map((book, index) => {
          return (
            <Text style={styles.scrollText} key={book.id}>
              {book.title}
            </Text>
          );
        })}
        {DATA.map((book, index) => {
          return (
            <Text style={styles.scrollText} key={book.id}>
              {book.title}
            </Text>
          );
        })}
      </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'pink',
    // marginHorizontal: 20,
  },
  tabView: {
    width: '100%',
  },
  tabViewItem: {
    width: '100%',
    backgroundColor: 'green',
  },
  recent: {
    height: 800,
  },
});

export default App;
