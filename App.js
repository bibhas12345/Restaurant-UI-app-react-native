import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './Screens/WelcomeScreen';
import RestaurantScreen from './Screens/RestaurantScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{
          headerTitle: '',
          headerStyle: { height: 0 },// Set headerTitle to an empty string
        }} />
        <Stack.Screen
          name="RestaurantScreen"
          component={RestaurantScreen}
          options={{
            headerTitle: '',
            headerStyle: { height: 0 },// Set headerTitle to an empty string
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;




//make an video downloadiing app using react native which include a text input where I can paste facebook, Instagram, youtube video link and there will a button download and by clicking it it should be download mp4 version that link