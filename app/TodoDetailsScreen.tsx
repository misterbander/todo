import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput } from 'react-native';
import { Theme, useTheme } from '@react-navigation/native';
import FloatingTextButton from './components/FloatingTextButton';

export default function TodoDetailsScreen() {
  const styles = getStyles(useTheme());
  const [title, setTitle] = useState('Title');
  const [description, setDescription] = useState('Description');

  return (
    <>
      <ScrollView style={styles.container}>
        <TextInput style={styles.title} value={title} onChangeText={setTitle} />
        <TextInput
          style={styles.description}
          value={description}
          onChangeText={setDescription}
        />
      </ScrollView>
      <FloatingTextButton title="SAVE" />
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
      fontWeight: 'bold',
      marginBottom: 16
    },
    description: {
      color: theme.colors.text,
      fontSize: 20
    }
  });
}
