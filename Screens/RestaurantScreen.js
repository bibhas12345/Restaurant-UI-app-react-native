import React, { useState } from 'react';
import { View, SafeAreaView, Dimensions, Text,Image } from 'react-native';
import styled from 'styled-components/native';
import { SliderBox } from "react-native-image-slider-box";
import Ionicons from '@expo/vector-icons/Ionicons'
// import FontAwesome from '@expo/vector-icons/FontAwesome'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
// import { green100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
const { width, height } = Dimensions.get('window');

const AboutContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ecf0f1;
`;

const RestaurantScreen = () => {

  const [mealType, setMealType] = useState('Veg');

  const imagesMap = {
    Veg: [
      { image: require('./part1/veg1.jpg'), text: 'Aloo Posto' },
      { image: require('./part1/veg2.jpg'), text: 'Navratan' },
      { image: require('./part1/veg3.jpg'), text: 'Shukto' },
      { image: require('./part1/veg4.jpg'), text: 'Mochar Ghonto' },
      { image: require('./part1/veg5.jpg'), text: 'Spicy Doi Potol' },
      { image: require('./part1/veg6.jpg'), text: 'poori aloo sabji' },
    ],
    NonVeg: [
      { image: require('./list2.jpg'), text: 'Non-Veg Image 1' },
      { image: require('./list2.jpg'), text: 'Non-Veg Image 2' },
      { image: require('./list2.jpg'), text: 'Non-Veg Image 3' },
      { image: require('./list2.jpg'), text: 'Non-Veg Image 4' },
      { image: require('./list2.jpg'), text: 'Non-Veg Image 5' },
      { image: require('./list2.jpg'), text: 'Non-Veg Image 6' },
    ],
    Sweet: [
      { image: require('./list4.jpg'), text: 'Sweet Image 1' },
      { image: require('./list4.jpg'), text: 'Sweet Image 2' },
      { image: require('./list4.jpg'), text: 'Sweet Image 3' },
      { image: require('./list4.jpg'), text: 'Sweet Image 4' },
      { image: require('./list4.jpg'), text: 'Sweet Image 5' },
      { image: require('./list4.jpg'), text: 'Sweet Image 6' },
    ],
  };
  // const renderItem = ({ item }) => (
  //   <View style={{ flex: 1, margin: 5, justifyContent:'center', alignItems:'center' }}>
  //     <Image source={item} style={{ width: 140, height: 100, borderRadius:10,marginTop:29 }} />
  //     <Text style={{  textAlign: 'center' }}>{item.text}</Text>
  //   </View>
  // );
  const renderItem = ({ item }) => (
    <View style={{ flex: 1, margin: 5, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={item.image} style={styles.image} />
      <Text className='font-semibold text-red-700' style={{ marginTop: 5, textAlign: 'center'}}>{item.text}</Text>
    </View>
  );
  
  const styles = {
    image: {
      width: 140,
      height: 100,
      borderRadius: 10,
    },
  };
    
  const images = [
    require('./list1.jpg'),
    require('./list2.jpg'),
    require('./list3.jpg'),
    require('./list4.jpg'),
    require('./list5.jpg'),
  ];

  return (
    <ScrollView>
    <View className='pt-20 bg-red-800 h-screen ' style={{ height:'100%'  }}>
      {/* <SafeAreaView /> */}
      <View className='flex flex-row mt-6 justify-evenly h-10 ' style={{ shadowColor: 'black', shadowOpacity: 30 }}>
        <View className='mt-4 h-full justify-center items-center'>
          <View className='bg-red-300 w-14 h-14' style={{ justifyContent: 'center', borderRadius: 5, textAlign: 'center', alignItems: 'center', lineHeight: 50 }}><Ionicons name='happy' size={30} color="red" /></View>
          <Text className='text-orange-200'>Taste</Text>
        </View>
        <View className='mt-4 h-full justify-center items-center'>
          <View className='bg-red-300 w-14 h-14' style={{ justifyContent: 'center', borderRadius: 5, textAlign: 'center', alignItems: 'center', lineHeight: 50 }}><Ionicons name='fast-food' size={30} color="red" /></View>
          <Text className='text-orange-200'>Quality</Text>
        </View>
        <View className='mt-4 h-full justify-center items-center'>
          <View className='bg-red-300 w-14 h-14' style={{ justifyContent: 'center', borderRadius: 5, textAlign: 'center', alignItems: 'center', lineHeight: 50 }}><Ionicons name='restaurant' size={30} color="red" /></View>
          <Text className='text-orange-200'>Tradition</Text>
        </View>
        <View className='mt-4 h-full justify-center items-center'>
          <View className='bg-red-300 w-14 h-14 shadow-lg shadow-black ' style={{ justifyContent: 'center', borderRadius: 5, textAlign: 'center', alignItems: 'center', lineHeight: 50 }}><Ionicons name='alarm' size={30} color="red" /></View>
          <Text className='text-orange-200'>Time</Text>
        </View>
      </View>
      <View className='mt-14 '>
        <SliderBox
          images={images}
          customStyles={{ width, height: 200, marginTop: 4 }}
          autoplay={true}
          autoplayInterval={3000}
          loop
          dotColor='red'
          resizeMethod="resize"
          resizeMode="cover"
          
          
        />
      </View>
      <AboutContainer className='bg-gray-200  top-10 rounded-tr-3xl rounded-tl-3xl mb-11' style={{borderTopRightRadius:100,borderTopLeftRadius:100 }}>

        <View style={{ flex:2, width:400, height:550 , marginTop:8, top:20}}>
        
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, padding:10 }}>
            <TouchableOpacity onPress={() => setMealType('Veg')}>
              <Text className='font-bold' style={{ color: mealType === 'Veg' ? 'red' : 'black' }}>Veg</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setMealType('NonVeg')}>
              <Text className='font-bold' style={{ color: mealType === 'NonVeg' ? 'red' : 'black' }}>Non-Veg</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setMealType('Sweet')}>
              <Text className='font-bold' style={{ color: mealType === 'Sweet' ? 'red' : 'black' }}>Sweet</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={imagesMap[mealType]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            
            numColumns={2}
            style={{padding:7}}
          />

         

         
        </View>
      </AboutContainer>
      <Text className='mt-7'>jhdkjhjfhjdhjdhfjd</Text>
    </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
