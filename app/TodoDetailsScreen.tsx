import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Theme, useNavigation, useTheme } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps
} from '@react-navigation/native-stack';
import TextButton from './components/TextButton';
import { BSON } from 'realm';
import TodoContext, { Todo } from './model/Todo';
import { RootStackParamList } from './RootStackParamList';

const { useRealm } = TodoContext;

export default function TodoDetailsScreen({
  route
}: NativeStackScreenProps<RootStackParamList, 'TodoDetails'>) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { id } = route.params;
  const styles = getStyles(useTheme());
  const realm = useRealm();
  const todo =
    id === undefined
      ? undefined
      : realm.objectForPrimaryKey<Todo>(
          'Todo',
          BSON.ObjectId.createFromHexString(id)
        );
  const [title, setTitle] = useState(todo?.title ?? '');
  const [description, setDescription] = useState(todo?.description ?? '');

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.title}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.description}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          multiline={true}
        />
        <TextButton
          title="SAVE"
          onPress={() => {
            realm.write(() => {
              if (todo !== undefined) {
                todo.title = title;
                todo.description = description;
                todo.updatedAt = new Date();
              } else {
                realm.create('Todo', Todo.generate(title, description));
              }
            });
            navigation.goBack();
          }}
        />
      </View>
    </>
  );
}

function getStyles(theme: Theme) {
  return StyleSheet.create({
    container: {
      padding: 10,
      flex: 1
    },
    title: {
      color: theme.colors.text,
      fontSize: 32,
      fontWeight: 'bold'
    },
    description: {
      color: theme.colors.text,
      fontSize: 20,
      flex: 1,
      marginBottom: 10,
      textAlignVertical: 'top'
    }
  });
}

export interface TodoDetailsScreenProps {
  id?: string;
}
