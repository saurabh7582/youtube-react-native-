import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions
} from 'react-native';

import { WebView } from 'react-native-webview';


const videoPlayer=({route})=>{
  const {videoId,title}= route.params
    return(
        <View style={{flex:1}}>
          <View style={{
            width:"100%",
            height:"100%"
          }}>
            <WebView
              source={{uri:`https://www.youtube.com/embed/${videoId}`}}
            />
          </View>
          <Text style={{
            fontSize:20,
            width:Dimensions.get("screen").width -50,
            margin:9
          }}
          numberOfLines={2}
          ellipsizeMode="tail"
          >
            {title}
          </Text>
          {/* <View 
            style={{borderBottomWidth:1}}
          /> */}
          
        </View>
    )
}

export default videoPlayer;