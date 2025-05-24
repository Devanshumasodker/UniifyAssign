import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { DraggableGrid } from './dragable-grid';

const initialData = [
  { key: '1', name: 'Item 1', color: '#FF6B6B' },
  { key: '2', name: 'Item 2', color: '#4ECDC4' },
  { key: '3', name: 'Item 3', color: '#45B7D1' },
  { key: '4', name: 'Item 4', color: '#96CEB4' },
  { key: '5', name: 'Item 5', color: '#FECA57' },
  { key: '6', name: 'Item 6', color: '#FF9FF3' },
  { key: '7', name: 'Item 7', color: '#1DD1A1' },
  { key: '8', name: 'Item 8', color: '#F368E0' },
  { key: '9', name: 'Item 9', color: '#576574' },
];

export default function DraggableGridScreen() {
  const [data, setData] = useState(initialData);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text style={styles.header}>Draggable Grid</Text>
      <DraggableGrid
        data={data}
        numColumns={3}
        renderItem={(item) => (
          <View style={[styles.item, { backgroundColor: item.color }]}>
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )}
        onDragRelease={setData}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    padding: 12,
    paddingTop: 24,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222f3e',
    marginBottom: 18,
    alignSelf: 'center',
    letterSpacing: 1,
  },
  item: {
    flex: 1,
    margin: 6,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  itemText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 0.5,
    padding: 15,
    
  },
});