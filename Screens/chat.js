import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import react,{useState} from 'react';
import axios from 'axios';

export default function Chat() {
  const [data, setData] = useState([]);
  const apiKey = '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';
  const apiUrl = 'http://api.openai.com/v1/engines/text-davinci-002/completions';
  const [textInput, setTextInput] = useState(' ');
  const handleSend = async() => {
    const prompt = textInput
    const responce = await axios.post(apiUrl,{
        prompt:prompt,
        max_tokens:1000,
        temperature:0.5
    },{
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer $)apiKey`
        }
    });
    const text = reaponse.data.choices[0].text;
    setData([...data,{tyoe:'user', 'text':textInput},{type:'bot','text':text}])
    setTextInput('');
  }
  
  return (
    <View className='flex flex-col p-12 justify-between items-center h-full'>
      <Text className='text-2xl  text-blue-400'>Open Chat</Text>

      <FlatList
        data={data}
        keyExtractor={(item,index)=> index.toStrings()}
        renderItem={({item}) =>(
            <View className='flex-row p-10'>
                <Text style={{color:item.type==='user'?'green':'red'}}{...item.type==='user'?'Ninza':'Bot'}></Text>
                <Text>{item.text}</Text>

            </View>
        )}
      
      />
      <TextInput
      className='flex flex-row bottom-2 h-full border-2 border-gray-400 w-full mt-12'
      value={textInput}
      onChangeText = {text => setTextInput(text)}
      placeholder="ask anything"
      
      />
      <TouchableOpacity
      onPress={handleSend}
      
      >
        <Text>lets go</Text>
      </TouchableOpacity>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}
