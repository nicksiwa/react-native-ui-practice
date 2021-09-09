import React from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {tailwind} from '../../tailwind';
import OrderSummaryComponent from '../components/order-summary-component/OrderSummaryComponent';

const OrderSummaryScreen = () => {
  return (
    <SafeAreaView style={tailwind('flex-1')}>
      <ScrollView>
        <OrderSummaryComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderSummaryScreen;
