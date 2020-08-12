
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Animated
} from 'react-native';


import Card from '../component/card'
import HeaderApp from '../component/header'
import { useSelector } from 'react-redux/lib/hooks/useSelector';
import { FlatList } from 'react-native-gesture-handler';

export default function App () {
  const ScrollY=new Animated.Value(0)
  const diffclamp=Animated.diffClamp(ScrollY,0,50)
  const translateY=diffclamp.interpolate({
    inputRange:[0,50],
    outputRange:[0,-50]
  })
  const cardData = useSelector(state=>{
    return state.cardData
  })
  return (
    <>
    <View style={{flex:1}}>
      <Animated.View style={{
        transform:[
          {translateY:translateY}
        ],
        // this is for header to see upwards when it get moved for android
        elevation:4,
        // this is for header to see upwards when it get moved for ios
        zindex:100
      }}>
      <HeaderApp/>
      </Animated.View>
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

      onScroll={(e)=>{
        ScrollY.setValue(e.nativeEvent.contentOffset.y)
      }}
  
      />

    </View>  
    </>
  );
}



//  App;
