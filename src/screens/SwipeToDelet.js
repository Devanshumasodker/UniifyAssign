import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import SwipeableRow from '../components/SwipeAbleRow';

const initialData = [
  { id: '1', text: 'List Item ' },
  { id: '2', text: 'List Item ' },
  { id: '3', text: 'List Item ' },
  { id: '4', text: 'List Item ' },
  { id: '5', text: 'List Item ' },
  { id: '6', text: 'List Item ' },
];

export default function SwipeToDeleteScreen() {
  const [data, setData] = useState(initialData);
  const [deletedItem, setDeletedItem] = useState(null);
  const [nextId, setNextId] = useState(7); 

  const handleDelete = (item) => {
    setDeletedItem(item);
    setData((prev) => prev.filter((d) => d.id !== item.id));
  };

  const handleUndo = () => {
    if (deletedItem) {
      setData((prev) => [deletedItem, ...prev]);
      setDeletedItem(null);
    }
  };

  const handleAddItem = () => {
    const newItem = {
      id: nextId.toString(),
      text: `List Item `,
    };
    setData((prev) => [...prev, newItem]);
    setNextId((prev) => prev + 1);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SwipeableRow item={item} onDelete={handleDelete} />
        )}
        contentContainerStyle={{ paddingBottom: 120 }}
      />

      {deletedItem && (
        <TouchableOpacity onPress={handleUndo} style={styles.undo}>
          <Text style={styles.undoText}>Undo</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  undo: {
    position: 'absolute',
    bottom: 90,
    alignSelf: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    elevation: 5,
  },
  undoText: {
    color: 'white',
    fontWeight: 'bold',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'dodgerblue',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  addButtonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 2,
  },
});
