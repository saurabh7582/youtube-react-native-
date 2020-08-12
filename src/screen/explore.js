import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  FlatList
} from 'react-native';

import HeaderApp from '../component/header'
import Card from '../component/card';
import { useSelector } from 'react-redux/lib/hooks/useSelector';



const LittleCard= ({name})=>{

  return(
    <View style={{
      backgroundColor:"red",
      width:150,
      height:50,
      borderRadius:4,
      marginBottom:10,
      marginTop:2   
    }}
    >
      <Text style={{
        textAlign:"center",
        color:"white",
        fontSize:22,
        marginTop:5
      }}>{name}</Text>
    </View>
  )
}

const explore=()=>{
  const cardData = useSelector(state=>{
    return state.cardData
  })
    return(
        <View style={{flex:1}}> 
          <HeaderApp/>
          <View style={{
            flexDirection:"row",
            flexWrap:"wrap",
            justifyContent:"space-around"}}>
            <LittleCard name="Gaming"/> 
            <LittleCard name="Music"/> 
            <LittleCard name="Treading"/> 
            <LittleCard name="News"/> 
            <LittleCard name="Flims"/> 
            <LittleCard name="Fashion"/> 
          </View>
          <Text style={{
            margin:8,
            fontSize:22,
            borderBottomWidth:1
          }}>Treading video</Text>
          
            <FlatList 
              data={cardData}
              renderItem={({item})=>{
                  return <Card 
                  videoId={item.id.videoId}
                  title={item.snippet.title}
                  channel={item.snippet.channelTitle}
              // image={item.thumbnails.default.url}
                  />
                }}
                keyExtractor={item=>item.id.videoId}
  
            />
        </View>
    )
}

export default explore;