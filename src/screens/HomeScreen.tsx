import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from './RootStackPrams';
import {tailwind} from '../../tailwind';
import {Button} from '../components/shared';

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenProp>();

  return (
    <SafeAreaView>
      <View style={tailwind('p-4')}>
        <Text style={tailwind('text-2xl font-bold text-center mb-4')}>
          Home Screen
        </Text>
        <View style={tailwind('mb-4')}>
          <Button
            title="Order Summary Component"
            onPress={() => navigation.navigate('OrderSummary')}
          />
        </View>
        <View style={tailwind('mb-4')}>
          <Button
            title="Stat Preview Card Component"
            onPress={() => navigation.navigate('StatPreviewCard')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
