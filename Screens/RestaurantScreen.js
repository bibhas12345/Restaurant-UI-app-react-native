import React, { useState } from 'react';
import { View, SafeAreaView, Dimensions, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { SliderBox } from "react-native-image-slider-box";
import Ionicons from '@expo/vector-icons/Ionicons'
// import FontAwesome from '@expo/vector-icons/FontAwesome'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

// import { green100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
const { width, height } = Dimensions.get('window');

const AboutContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ecf0f1;
`;


const RestaurantScreen = ({ navigation }) => {


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
      { image: require('./part2/nonveg1.jpg'), text: 'Chicken Curry' },
      { image: require('./part2/nonveg2.jpg'), text: 'Fish Curry' },
      { image: require('./part2/nonveg3.jpg'), text: 'Ilish' },
      { image: require('./part2/nonveg4.jpg'), text: 'Dab Chingri(Prawn)' },
      { image: require('./part2/nonveg5.jpg'), text: 'Mutton' },
      { image: require('./part2/nonveg6.jpg'), text: 'Egg curry' },
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
      <Text className='font-semibold text-red-700' style={{ marginTop: 5, textAlign: 'center' }}>{item.text}</Text>
    </View>
  );

  const styles = {
    image: {
      width: 140,
      height: 100,
      borderRadius: 10,
      marginTop: 8
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
    <ScrollView >
      <View className='pt-20 bg-red-800 h-screen ' style={{ height: '100%' }}>
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
        <AboutContainer className='bg-white  top-10  rounded-tr-3xl rounded-tl-3xl mb-11' style={{ borderTopRightRadius: 100, borderTopLeftRadius: 100 }}>

          <View style={{ flex: 2, width: 400, height: 1250, marginTop: 8, top: 20 }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, padding: 10 }}>
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
              style={{ padding: 7 }}
            />


            <View className='mb-12 b' style={{ bottom:29, flex: 1, flexDirection: 'row' }} >
              <View className='bg-red-800 h-[115] w-1/2 '>
                <Image className='overflow-visible bottom-5' style={{height:170, width:200}} source={require('./thali.png')} />
              </View>
              <View className='bg-red-800 h-[115] w-1/2 rounded-3xl'>
                <TouchableOpacity className='bg-red-800 h-[115] w-full ' onPress={() => navigation.navigate('Thali')}>
                  <Text className='w-1/2 ml-4 mt-5 text-red-100'>Try our Bengali-Tradition Thali          Rating-  ⭐⭐⭐⭐⭐</Text>
                <Ionicons style={{left:150, bottom:50}} color='white' size={40} name='caret-forward-circle'></Ionicons>
                </TouchableOpacity>

              </View>

            </View>


            <Text className='top-8 text-red-800 text-1xl ml-5 font-semibold'>More | Spacial Dish</Text>
            <View className='flex flex-row p-3 justify-around flex-wrap top-8 mb-10 '>
              <View className='bg-red-800 w-1/3 ml-3 h-[230]  m-3  rounded-3xl'>
                <View className='w-4 h-4 bg-green-600 rounded-3xl m-2'></View>
                <Image className='bottom-9 shadow-black shadow-2xl' source={require('./more/more1.png')} />
                <Text className='bottom-14 ml-2'>Rating-⭐⭐⭐⭐</Text>
                <Text className='ml-7 text-red-200 bottom-11'>Veg Cutlet</Text>

              </View>
              <View className='bg-red-800 w-1/3 ml-3 h-[230]  m-3  rounded-3xl'>
                <View className='w-4 h-4 bg-red-500 rounded-3xl m-2'></View>
                <Image className='bottom-9 shadow-black shadow-2xl ' style={{ height: 155, width: 160, marginTop: 23 }} source={require('./more/more2.png')} />
                <Text className='bottom-10 ml-2'>Rating-⭐⭐⭐⭐</Text>
                <Text className='ml-5 text-red-200 bottom-7'>Chicken Cutlet</Text>

              </View>
              <View className='bg-red-800 w-1/3 ml-3 h-[230]  m-3  rounded-3xl'>
                <View className='w-4 h-4 bg-red-600 rounded-3xl m-2'></View>
                <Image className='bottom-2 shadow-black shadow-2xl' style={{ width: 150, height: 139 }} source={require('./more/more3.png')} />
                <Text className=' ml-2'>Rating-⭐⭐⭐⭐</Text>
                <Text className='ml-8 text-red-200 -bottom-3'>Fish Cutlet</Text>

              </View>
              <View className='bg-red-800 w-1/3 ml-3 h-[230]  m-3  rounded-3xl'>
                <View className='w-4 h-4 bg-red-600 rounded-3xl m-2'></View>
                <Image className='bottom-11 shadow-black shadow-2xl' style={{ width: 209, height: 164, right: 26 }} source={require('./more/more4.png')} />
                <Text className='bottom-7 ml-2'>Rating-⭐⭐⭐⭐</Text>
                <Text className='ml-3 bottom-4 text-red-200'>Kolkata Biriyani</Text>

              </View>
            </View>

          </View>

        </AboutContainer>
        <Text className='mt-7'>jhdkjhjfhjdhjdhfjd</Text>
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
