import React from 'react';
import {SafeAreaView} from 'react-native';
import OrderSummaryComponent from './src/components/order-summary-component/OrderSummaryComponent';
import tailwind from 'tailwind-rn';

const App = () => {
  return (
    <SafeAreaView style={tailwind('h-full')}>
      <OrderSummaryComponent />
    </SafeAreaView>
  );
};

export default App;
