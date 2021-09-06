/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {tailwind} from "../../../tailwind";

const OrderSummaryComponent = () => {
  return (
    <View style={tailwind('h-full bg-indigo-50')}>
      <ImageBackground
        style={styles.bgImage}
        source={require('../../assets/order-summary-component/pattern-background-mobile.png')}>
        <View style={tailwind('flex-1 px-4 justify-center')}>
          <View style={tailwind('bg-white rounded-3xl')}>
            <Image
              style={styles.coverImage}
              source={require('../../assets/order-summary-component/illustration-hero.png')}
            />
            <View style={tailwind('py-8 px-4')}>
              <Text
                style={tailwind(
                  'text-2xl font-bold text-gray-800 text-center mb-4',
                )}>
                Order Summary
              </Text>
              <Text
                style={tailwind(
                  'text-lg text-gray-500 text-center leading-8 mb-8',
                )}>
                You can now listem to millions of songs, audiobooks, and
                podcasts on any device anywhere you like!
              </Text>
              <View
                style={tailwind(
                  'flex flex-row items-center rounded-2xl bg-blue-gray-50 p-5 mb-4',
                )}>
                <View style={tailwind('flex flex-row items-center flex-1')}>
                  <Image
                    style={styles.icon}
                    source={require('../../assets/order-summary-component/icon-music.png')}
                  />
                  <View style={tailwind('ml-4')}>
                    <Text style={tailwind('text-lg font-bold text-gray-800')}>
                      Annual Plan
                    </Text>
                    <Text style={tailwind('text-gray-500')}>$59.99/year</Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <Text style={tailwind('text-indigo-500')}>Change</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={tailwind('bg-indigo-500 p-4 rounded-xl')}>
                  <Text
                    style={tailwind(
                      'text-lg text-center text-white font-bold',
                    )}>
                    Process to Payment
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={tailwind('p-4 rounded-xl')}>
                  <Text style={tailwind('text-lg text-center font-bold')}>
                    Cancel Order
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    resizeMode: 'contain',
    width: '100%',
    height: '30%',
    flex: 1,
  },
  coverImage: {
    resizeMode: 'cover',
    width: '100%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  icon: {
    width: 50,
    height: 50,
  },
});

export default OrderSummaryComponent;
