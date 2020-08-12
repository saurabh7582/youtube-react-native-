
import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  FlatList,
  ActivityIndicator
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Ionicons from 'react-native-vector-icons/Ionicons'
import MiniCard from '../component/miniCard'
import { useNavigation,useTheme } from '@react-navigation/native';
import {useSelector,useDispatch} from 'react-redux'

//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyAeQMTKq1wDQwV7fEb6yCGfq4s2BS2eVjY

const search=()=>{
    const {colors} = useTheme()
    const dispatch=useDispatch()
    const navigation = useNavigation();
    const [value,setValue]=useState('')
    // const [miniCardData,setminiCard]=useState([])
    //adding redux
    const miniCardData = useSelector(state=>{
        return state.cardData
    })
    const [lodaing,setloading]=useState(false)

    const fetchData=()=>{
        setloading(true)
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyAeQMTKq1wDQwV7fEb6yCGfq4s2BS2eVjY`)
        .then(res=>res.json())
        .then(data=>{
            setloading(false)
            dispatch({type:"add",payload:data.items})
            // setminiCard(data.items)
        })
    }
    return(
        <View style={{flex:1}}>
            <View style={{
                flexDirection:"row",
                justifyContent:"space-around",
                height:40,
                margin:5,
                elevation:5}}>
                <Ionicons style={{
                    margin:5
                }} name="md-arrow-back" size={30} color={colors.iconColor}
                    onPress={()=>{
                        navigation.goBack();
                    }}
                ></Ionicons>
                <TextInput
                style={{
                    width:"70%",
                    backgroundColor:"#e8e7e3"
                }}
                value={value}
                onChangeText={(text)=>setValue(text)}
                />
                <Ionicons style={{
                    margin:5
                }} 
                name="md-send" size={30} color={colors.iconColor}
                onPress={()=>fetchData()}
                 />
            </View>

            {lodaing ? <ActivityIndicator style={{marginTop:10}}size="large" color="red"/>:null }
                <FlatList 
                        data={miniCardData}
                        renderItem={({item})=>{
                            return <MiniCard 
                            videoId={item.id.videoId}
                            title={item.snippet.title}
                            channel={item.snippet.channelTitle}
                        // image={item.thumbnails.default.url}
                            />
                        }}

                    keyExtractor={item=>item.id.videoId}
                    
                />
       {/* <MiniCard/> */}

       
        </View>
    )
}

export default search;