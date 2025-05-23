import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native'; // Import Text
import SwipeToDeleteScreen from '../screens/SwipeToDelet';
import DraggableGridScreen from '../screens/DraggableGrid';
import PagedCarouselScreen from '../screens/PagedCarousel';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let icon;
          if (route.name === 'Swipe') icon = '👆';
          else if (route.name === 'Grid') icon = '🔲';
          else if (route.name === 'Carousel') icon = '🖼️';

          return (
            <Text style={{ fontSize: size, color }}>{icon}</Text>
          );
        },
      })}
    >
      <Tab.Screen name="Swipe" component={SwipeToDeleteScreen} />
      <Tab.Screen name="Grid" component={DraggableGridScreen} />
      <Tab.Screen name="Carousel" component={PagedCarouselScreen} />
    </Tab.Navigator>
  );
}