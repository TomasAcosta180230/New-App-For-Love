import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import slides from '../data/slides';
import OnboardingItem from '../Components/onboardingItems'
import { Animated } from 'react-native';
import Paginator from '../Components/Paginator'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const Onboarding = () => {

  const [currentIndex, SetCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);


  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    SetCurrentIndex(viewableItems[0].index);
  }).current;

  return (
    <KeyboardAwareScrollView style={{ top: 188, marginLeft: 38, left: -20 }}>
      <View style={styles.container} >
        <View style={{ flex: 3 }}>
          <FlatList data={slides} renderItem={({ item }) => <OnboardingItem item={item} />} horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
              useNativeDriver: false,
            })}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef} />
        </View>
        <Paginator data={slides} scrollX={scrollX} />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Onboarding;
