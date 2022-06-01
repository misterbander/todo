import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Theme, useTheme } from '@react-navigation/native';
import moment from 'moment';
import RoundIconButton from './RoundIconButton';
import editIcon from '../images/edit.png';
import deleteIcon from '../images/delete.png';

export default function TodoListItem({
  todo
}: {
  todo: {
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
  };
}) {
  const styles = getStyles(useTheme());

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.title}>{todo.title}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {todo.description}
        </Text>
        <Text style={styles.date}>
          Created At {moment(todo.createdAt).format('D/M/yyyy h:mm a')}
        </Text>
        <Text style={styles.date}>
          Updated At {moment(todo.updatedAt).format('D/M/yyyy h:mm a')}
        </Text>
      </View>
      <View style={styles.options}>
        <RoundIconButton
          buttonStyle={styles.roundButton}
          iconStyle={styles.roundButtonIcon}
          icon={editIcon}
        />
        <RoundIconButton
          buttonStyle={styles.roundButton}
          iconStyle={styles.roundButtonIcon}
          icon={deleteIcon}
        />
      </View>
    </View>
  );
}

function getStyles(theme: Theme) {
  return StyleSheet.create({
    container: {
      marginBottom: 10,
      padding: 20,
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: theme.colors.card
    },
    details: {
      flex: 1,
      flexDirection: 'column'
    },
    title: {
      fontWeight: 'bold',
      fontSize: 18,
      color: theme.colors.text
    },
    description: {
      paddingBottom: 8,
      color: theme.colors.text,
      flexShrink: 1
    },
    date: {
      color: 'gray'
    },
    options: {
      flexDirection: 'row',
      alignItems: 'flex-start'
    },
    roundButton: {
      backgroundColor: '#f9a1ff',
      width: 40,
      height: 40,
      borderRadius: 20,
      margin: 2,
      alignItems: 'center',
      justifyContent: 'center'
    },
    roundButtonIcon: {
      width: 24,
      height: 24,
      tintColor: 'white'
    }
  });
}
