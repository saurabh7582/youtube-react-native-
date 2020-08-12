
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation,useTheme } from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';


const Header=() => {
  const navigation = useNavigation();
  const {colors} = useTheme()
  const dispatch = useDispatch()
  const currentThemes = useSelector(state=>{
    return state.darkMode
  })
  //const mycolor = color.iconColor
  return (
    
    <>
    
      <View style={{
          position:"absolute",
          top:0,
          left:0,
          right:0,
          height:50,
          backgroundColor:colors.HeaderColor,
          flexDirection:"row",
          justifyContent:"space-between"
      }}>
        
        <View style={{flexDirection:"row",margin:2,marginLeft:20,width:150}} >
         <FontAwesome name="youtube" size={40} color={colors.iconColor} />
         </View>
         
        <View >
        <MaterialIcons name="videocam" size={35} color={colors.iconColor}/>
          </View> 
        <View style={{margin:5}} >
        <Fontisto name="search" size={30} color={colors.iconColor}
          onPress={()=>{
            navigation.navigate('search')
          }}
        /> 
          </View> 
        <View >
        <MaterialCommunityIcons name="account-circle" size={35} color={colors.iconColor}
        
        onPress={()=>dispatch({type:'changeTheme',payload:!currentThemes})}
        />
          </View> 

      </View>
    </>
  );
}

export default Header;
