import React from 'react';
import { StyleSheet, Dimensions, Text, View } from 'react-native';
import {
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const THRESHOLD = -width * 0.4;

export default function SwipeableRow({ item, onDelete }) {
  const translateX = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = Math.min(0, event.translationX); 
    },
    onEnd: () => {
      if (translateX.value < THRESHOLD) {
        translateX.value = withTiming(-width, {}, () => {
          runOnJS(onDelete)(item);
        });
      } else {
        translateX.value = withTiming(0); 
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.row, animatedStyle]}>
        <Text style={styles.text}>{item.text}</Text>
      </Animated.View>
    </PanGestureHandler>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#eee',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
  },
});
