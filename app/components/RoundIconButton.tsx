import React from 'react';
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  ImageStyle,
  Platform,
  StyleProp,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';

export default function RoundIconButton({
  icon,
  buttonStyle,
  iconStyle,
  onPress
}: RoundIconButtonProps) {
  return Platform.OS === 'android' ? (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={buttonStyle}>
        <Image source={icon} style={iconStyle} />
      </View>
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <View style={buttonStyle}>
        <Image source={icon} style={iconStyle} />
      </View>
    </TouchableOpacity>
  );
}

interface RoundIconButtonProps {
  icon: ImageSourcePropType;
  buttonStyle: StyleProp<ViewStyle>;
  iconStyle: StyleProp<ImageStyle>;
  onPress?: (event: GestureResponderEvent) => void;
}
