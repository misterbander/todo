import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import FloatingActionButton from './components/FloatingActionButton';
import TodoListItem from './components/TodoListItem';
import addIcon from './images/add.png';
import TodoContext, { Todo } from './model/Todo';
import { RootStackParamList } from './RootStackParamList';

const { useQuery } = TodoContext;

export default function TodoListScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const todos = useQuery(Todo);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={todos.sorted('updatedAt', true)}
        keyExtractor={item => item._id.toHexString()}
        renderItem={({ item }) => <TodoListItem todo={item} />}
      />
      <FloatingActionButton
        icon={addIcon}
        onPress={() => {
          navigation.navigate('TodoDetails', {});
        }}
      />
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
