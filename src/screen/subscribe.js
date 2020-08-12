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

import HeaderApp from '../component/header'

const subscribe=()=>{
    return(
        <View style={{flex:1}}>
          <HeaderApp/>
        </View>
    )
}

export default subscribe;