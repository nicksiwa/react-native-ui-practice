import React from 'react';
import {TouchableOpacity, Text, GestureResponderEvent} from 'react-native';
import {tailwind} from '../../../tailwind';

type ButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
};

export const Button = ({title, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tailwind('bg-indigo-500 p-2 rounded-xl')}>
      <Text style={tailwind('text-lg text-center text-white font-bold')}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
