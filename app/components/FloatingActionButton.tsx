import React from 'react';
import {
  GestureResponderEvent,
  ImageSourcePropType,
  StyleSheet
} from 'react-native';
import RoundIconButton from './RoundIconButton';

export default function FloatingActionButton({
  icon,
  onPress
}: FloatingActionButtonProps) {
  return (
    <RoundIconButton
      icon={icon}
      buttonStyle={styles.button}
      iconStyle={styles.buttonIcon}
      onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#f9a1ff',
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonIcon: {
    width: 30,
    height: 30,
    tintColor: 'white'
  }
});

interface FloatingActionButtonProps {
  icon: ImageSourcePropType;
  onPress?: (event: GestureResponderEvent) => void;
}
