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

import { useNavigation,useTheme  } from '@react-navigation/native';

const MiniCard=(props)=>{
    const {colors} = useTheme()
    const navigation = useNavigation();
    return(
        <TouchableOpacity
        onPress={()=>navigation.navigate("VideoPlay",{videoId:props.videoId,title:props.title})}
        >
        <View style={{flex:1,flexDirection:"row",margin:10}}>
            <Image
             source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
             style={{
                width:"45%",
                height:100
            }}
             />
             <View style={{marginLeft:5}}>
             <Text style={{
                        fontSize:15,
                        width:Dimensions.get("screen").width/2,
                        color:colors.textColor
                        }}
                        // to give .. on extending the line 
                        ellipsizeMode={"tail"}
                        // number of line the tail should be work
                        numberOfLines={3}
                    >{props.title}</Text>
                    <Text style={{
                        fontSize:13,
                        color:colors.textColor
                        }}>
                            {props.channel}</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default MiniCard;