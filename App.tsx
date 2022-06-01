import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './app/RootStackParamList';
import TodoListScreen from './app/TodoListScreen';
import TodoDetailsScreen from './app/TodoDetailsScreen';
import { darkTheme, lightTheme } from './app/constants';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.background
          },
          headerShadowVisible: false
        }}>
        <Stack.Screen
          name="TodoList"
          component={TodoListScreen}
          options={{ title: 'Todo List' }}
        />
        <Stack.Screen
          name="TodoDetails"
          component={TodoDetailsScreen}
          options={{ title: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
