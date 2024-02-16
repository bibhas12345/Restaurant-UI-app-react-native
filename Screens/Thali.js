import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const Thali = () => {
  const [selectedType, setSelectedType] = useState('veg');
  const [itemCount, setItemCount] = useState(0)
  const handleButtonPress = () => {
    alert(`Order Placed - ${itemCount} Veg Thal(s)  Thank You`);
  };

  const handleIncrement = () => {
    setItemCount(itemCount + 1);
  };

  const handleDecrement = () => {
    if (itemCount > 1) {
      setItemCount(itemCount - 1);
    }
  };

  const handleButtonPress1 = () => {
    alert(`Order Placed - ${itemCount} Non-Veg Thal(s)  Thank You`);
  };

  const handleIncrement1 = () => {
    setItemCount(itemCount + 1);
  };

  const handleDecrement1 = () => {
    if (itemCount > 1) {
      setItemCount(itemCount - 1);
    }
  };



  const renderVegView = () => {
    return (
      <View className='w-full bg-green-600 h-full'>
        <View className='bg-green-600 h-[190]'>

        </View>
        <Image className=' fixed z-30 ' style={{ bottom: 150, marginLeft: 80, height: 220, width: 220 }} source={require('./veg.png')} />
        <View className='bg-white h-[690] pl-4 ' style={{ borderRadius: 90, bottom: 270 }} >
          {/* <Text>jhjhjh</Text> */}
          <View className='flex mt-10 flex-row justify-between' style={{ top: 40 }}>
            <Text className='w-1/4 font-bold text-sm'>Enjoy our Tradional Bengali veg thali</Text>
            <Text className='w-1/4 font-bold text-sm'>Rating (317+)⭐⭐⭐⭐</Text>
          </View>
          <View className='flex flex-row mt-9 p-4 pr-7 h-[230] justify-between'>
            <View className=' flex flex-col justify-evenly' style={{}}>
              <Text className='text-green-600 font-bold text-lg'>|| Rice / Poori</Text>
              <Text className='text-green-600 font-bold text-lg'>|| Aloo Posto</Text>
              <Text className='text-green-600 font-bold text-lg'>|| Shukto / Navratn</Text>
              <Text className='text-green-600 font-bold text-lg'>|| Dal Makhni</Text>
            </View>
            <View className='flex flex-col justify-evenly'>
              <Text className='text-green-600 font-bold text-lg'>|| Panir</Text>
              <Text className='text-green-600 font-bold text-lg'>|| Chatney</Text>
              <Text className='text-green-600 font-bold text-lg'>|| Sweet</Text>
              <Text className='text-green-600 font-bold text-lg'>|| Papor</Text>
            </View>
          </View>
          <Text style={{ top: 20, left: 155 }}>Price : Rs119/-</Text>
          <View className='' style={{ flex: 1, flexDirection:'row', justifyContent: 'space-evenly', alignItems: 'center', top: 50 }}>
            <View className='flex flex-row bottom-6'> 
              <TouchableOpacity className='bg-green-600 w-10 h-9 shadow-md shadow-black rounded-full' onPress={handleDecrement} style={{}}>
              <Text className='text-black left-4 text-3xl' style={{  }}>-</Text>
            </TouchableOpacity>
              <Text className='bg-white m-2 text-lg font-semibold bottom-1' style={{}}>{itemCount}</Text>
              <TouchableOpacity className='bg-green-600 shadow-md shadow-black w-10 h-9 rounded-full' onPress={handleIncrement} style={{}}>
                <Text className=' text-black left-3 top- text-2xl' style={{}}>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity className='rounded-3xl shadow-2xl bottom-6 shadow-black' title="Place Order" onPress={handleButtonPress} style={{ width: 180, height: 60, backgroundColor: '#16A34A' }}>
              <Text className='top-5' style={{ left: 49, }}>Place Order</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    );
  };

  const renderNonVegView = () => {
    return (
      <View className='w-full bg-red-600 h-full'>
        <View className='bg-red-600 h-[190]'>

        </View>
        <Image className=' fixed z-30 ' style={{ bottom: 150, marginLeft: 104, height: 220, width: 220 }} source={require('./nonveg.png')} />
        <View className='bg-white h-[690] pl-4 ' style={{ borderRadius: 90, bottom: 270 }} >
          {/* <Text>jhjhjh</Text> */}
          <View className='flex mt-10 flex-row justify-between' style={{ top: 40 }}>
            <Text className='w-1/4 font-bold text-sm'>Enjoy our Tradional Bengali Non-veg thali</Text>
            <Text className='w-1/4 font-bold text-sm'>Rating (617+)⭐⭐⭐⭐</Text>
          </View>
          <View className='flex flex-row mt-9 p-4 pr-7 h-[230] justify-between'>
            <View className=' flex flex-col justify-evenly' style={{}}>
              <Text className='text-red-600 font-bold text-lg'>|| Rice / Poori</Text>
              <Text className='text-red-600 font-bold text-lg'>|| Aloo Posto / Navratn</Text>
              <Text className='text-red-600 font-bold text-lg'>|| Fish</Text>
              <Text className='text-red-600 font-bold text-lg'>|| Dal Makhni</Text>
            </View>
            <View className='flex flex-col justify-evenly'>
              <Text className='text-red-600 font-bold text-lg'>|| Chicken / Mutton</Text>
              <Text className='text-red-600 font-bold text-lg'>|| Chatney</Text>
              <Text className='text-red-600 font-bold text-lg'>|| Sweet</Text>
              <Text className='text-red-600 font-bold text-lg'>|| Papor</Text>
            </View>
          </View>
          <Text style={{ top: 20, left: 155 }}>Price : Rs199/-</Text>
          <View className='' style={{ flex: 1, flexDirection:'row', justifyContent: 'space-evenly', alignItems: 'center', top: 50 }}>
            <View className='flex flex-row bottom-6'> 
              <TouchableOpacity className='bg-red-600 w-10 h-9 shadow-md shadow-black rounded-full' onPress={handleDecrement1} style={{}}>
              <Text className='text-black left-4 text-3xl' style={{  }}>-</Text>
            </TouchableOpacity>
              <Text className='bg-white m-2 text-lg font-semibold bottom-1' style={{}}>{itemCount}</Text>
              <TouchableOpacity className='bg-red-600 shadow-md shadow-black w-10 h-9 rounded-full' onPress={handleIncrement1} style={{}}>
                <Text className=' text-black left-3 top- text-2xl' style={{}}>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity className='rounded-3xl shadow-2xl bottom-6 shadow-black' title="Place Order" onPress={handleButtonPress1} style={{ width: 180, height: 60, backgroundColor: '#DC2619' }}>
              <Text className='top-5' style={{ left: 49, }}>Place Order</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    );
  };

  return (
    <View className='flex mt-9  items-center w-full h-full'>
      <Text style={{ bottom: 19 }}>Select Meal Type:</Text>
      <View className='flex flex-row w-full justify-evenly'>
        <TouchableOpacity onPress={() => setSelectedType('veg')}>
          <Text className='font-bold w-16 pl-4 rounded-tl-lg rounded-tr-lg ' style={{ backgroundColor: selectedType === 'veg' ? '#16A34A' : 'white' }}>Veg</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelectedType('nonveg')}>
          <Text className='font-bold w-16 pl-1 rounded-tl-lg rounded-tr-lg' style={{ backgroundColor: selectedType === 'nonveg' ? '#DC2619' : 'white' }}>Non-Veg</Text>
        </TouchableOpacity>
      </View>

      {selectedType === 'veg' ? renderVegView() : renderNonVegView()}
    </View>
  );
};

export default Thali;