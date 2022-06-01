import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import FloatingActionButton from './components/FloatingActionButton';
import TodoListItem from './components/TodoListItem';
import addIcon from './images/add.png';

export default function TodoListScreen() {
  const todos = [
    {
      title: 'First',
      description:
        "Description the quick brown fox jumps over the lazy dog, it really jumped over the lazy dog. Why did it jump over the lazy dog? It's because five boxing wizards jumped quickly, and how vexingly quick daft zebras jump",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Second',
      description: 'Description',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Third',
      description: 'Description',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Fourth',
      description: 'Description',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={todos}
        renderItem={({ item }) => <TodoListItem todo={item} />}
      />
      <FloatingActionButton icon={addIcon} onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  flatListContainer: {
    padding: 10
  }
});
