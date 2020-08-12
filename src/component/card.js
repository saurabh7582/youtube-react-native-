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
  TouchableOpacity
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation,useTheme } from '@react-navigation/native';

const Card = (props)=>{
    const {colors} = useTheme()
    const navigation = useNavigation();
    return(
        <TouchableOpacity
            onPress={()=>navigation.navigate("VideoPlay",{videoId:props.videoId,title:props.title})}
        >

         <View>

            <Image
             source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
             style={{width:"100%",
             height:200
            }}
             />

            <View style={{
                flexDirection:"row",
                margin:5
            
            }}>
                <MaterialCommunityIcons name="account-circle" size={40} color="grey"/>
                
                <View style={{
                    marginLeft:10
                }}>
                    <Text style={{
                        fontSize:20,
                        width:Dimensions.get("screen").width - 50,
                        color:colors.textColor
                        }}
                        // to give .. on extending the line 
                        ellipsizeMode={"tail"}
                        // number of line the tail should be work
                        numberOfLines={2}
                       
                        >{props.title} </Text>
                    <Text style={{
                        fontSize:15,
                        color:colors.textColor}}>{props.channel}</Text>
                </View>
            </View>
         </View>
         </TouchableOpacity>
        
    )
}

export default Card;