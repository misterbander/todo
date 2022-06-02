import React from 'react';
import {
  GestureResponderEvent,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from 'react-native';

export default function TextButton({ title, onPress }: TextButtonProps) {
  return Platform.OS === 'android' ? (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 16,
    padding: 20,
    borderRadius: 8,
    backgroundColor: '#f9a1ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

interface TextButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
}
