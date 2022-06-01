import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const lightTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: '#fef1ff',
    card: 'white'
  }
};

export const darkTheme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    background: 'black',
    card: '#1f1f1f'
  }
};
