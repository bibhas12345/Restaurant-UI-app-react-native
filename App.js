import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './Screens/WelcomeScreen';
import RestaurantScreen from './Screens/RestaurantScreen';
import Thali from './Screens/Thali';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{
          headerTitle: '',
          headerStyle: { height: 33, backgroundColor:'#D1D5DB' },
        }} />
        <Stack.Screen
          name="RestaurantScreen"
          component={RestaurantScreen}
          options={{
            headerTitle: '',
            headerStyle: { height: 33, backgroundColor:'#D1D5DB' },
          }}
        />
         <Stack.Screen name="Thali" component={Thali} options={{
          headerTitle: '',
          headerStyle: {height: 33, backgroundColor:'#D1D5DB'},
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;




