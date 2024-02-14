// Import necessary components from React and React Navigation
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Your ViewBox component
const Thali = () => {
  
  return (
    // Using TouchableOpacity for the clickable area
    <View className='flex justify-center items-center h-full'>
      {/* Your view box content */}
      <Text>Click me to go to another component!</Text>
    </View>
  );
};

export default Thali;
