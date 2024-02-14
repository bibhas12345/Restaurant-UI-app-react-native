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
    <View className='h-full bg-red-950 flex flex-col  items-center '>
      <SafeAreaView/>
      <Image className=' ' source={bg1} style={{width:450, height:350, top:100, opacity:0.3, }}/>
      <WelcomeContainer className="flex flex-col mb-16 bottom-12 ">

        <Image className='shadow-black ' source={img1} style={{ width: 300, height: 300, marginTop: 10, shadowColor:'gray' }} />
        <Text className='text-3xl font-bold text-gray-200' style={{}}>Welcome</Text>
        <WelcomeButton className='mt-6 rounded-tl-sm rounded-br-sm bg-orange-700 ' style={{}} onPress={() => navigation.navigate('RestaurantScreen')}>
          <WelcomeButtonText className=''>Enter Restaurant</WelcomeButtonText>
        </WelcomeButton>

      </WelcomeContainer>
    </View>
  );
};

export default WelcomeScreen;

