import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import img1 from './images1.png';
import bg1 from './bg1.jpg'


const WelcomeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const WelcomeButton = styled.TouchableOpacity`
  background-color: #3498db;
  padding: 15px 30px;
  border-radius: 8px;
`;

const WelcomeButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const WelcomeScreen = ({ navigation }) => {
  return (
    <View>
      <View className='bg-red-500 h-16 flex flex-row'>
        <Image style={{ height: 50, marginLeft: 34, width: 50 }} source={require('./logo.png')} />
        <Text className='font-semibold mt-5 text-yellow-500'>Bongo Dish</Text>
      </View>
      <View className='h-full bg-red-500 flex flex-col  items-center '>
        <SafeAreaView />
        <Image className=' ' source={bg1} style={{ width: 450, height: 350, top: 50, opacity: 0.3, }} />
        <WelcomeContainer className="flex flex-col mb-16 bottom-12 ">

          <Image className='shadow-black ' source={img1} style={{ width: 300, height: 300, bottom:53, shadowColor: 'gray' }} />
          <Text className='text-3xl font-bold text-gray-200' style={{bottom:63}}>Welcome</Text>
          <WelcomeButton className=' rounded-tl-sm rounded-br-sm bg-red-700 ' style={{bottom:62}} onPress={() => navigation.navigate('RestaurantScreen')}>
            <WelcomeButtonText className=''>Enter Restaurant</WelcomeButtonText>
          </WelcomeButton>

        </WelcomeContainer>
      </View>
    </View>


  );
};

export default WelcomeScreen;

