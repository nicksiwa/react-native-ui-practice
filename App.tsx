import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './src/screens/RootStackPrams';
import HomeScreen from './src/screens/HomeScreen';
import OrderSummaryScreen from './src/screens/OrderSummaryScreen';
import StatPreviewCardScreen from './src/screens/StatPreviewCardScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="OrderSummary" component={OrderSummaryScreen} />
        <Stack.Screen
          name="StatPreviewCard"
          component={StatPreviewCardScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
