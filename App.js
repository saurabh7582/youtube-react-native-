/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import Home from './src/screen/home'
import {NavigationContainer, StackActions,DefaultTheme, DarkTheme,useTheme } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import videoPlayer from './src/screen/videoPlayer';
import explore from './src/screen/explore';
import subscribe from './src/screen/subscribe';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import search from './src/screen/search';
//redux import
import {Provider,useSelector} from 'react-redux'
import {createStore,combineReducers} from 'redux'
//importing reducer 
import {reducer} from './src/reducer/redux'
import {themeReducer} from './src/reducer/themeReducer'

// adding redux in theme
const rootReducer = combineReducers({
  cardData:reducer, //[],
  myDarkMode:themeReducer //flase
})

// adding redux 
const store = createStore(rootReducer)

const stack=createStackNavigator()
const tabs=createBottomTabNavigator()

// adding dark them
const defaultBlack= {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    HeaderColor: '#403f3f',
    iconColor:"white",
    tabColor:"white",
    textColor:"white"
  },
};

const defaultWhite= {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    HeaderColor: '#f2eeed',
    iconColor:"black",
    tabColor:"black",
    textColor:"black"
  },
};

const RootHome=()=>{
  const {colors} = useTheme()
  return(
    <tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({color}) => {
        let iconName;

        if (route.name === 'Home') {
          iconName ="home"
        } else if (route.name === 'Explore') {
          iconName ="explore"
        } else if(route.name === 'Subscribe'){
          iconName ="subscriptions"
        }

        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={25} color={colors.tabColor} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'red',
      inactiveTintColor: 'white',
    }}
    >

      <tabs.Screen name="Home" component={Home} />
      <tabs.Screen name="Explore" component={explore}/>
      <tabs.Screen name="Subscribe" component={subscribe}/>
    </tabs.Navigator>
  )
}

export default App = ()=>{
  return(
  <Provider store={store}>
    <Navigation />
  </Provider>
  )
}
export function Navigation () {

  let CurrentTheme = useSelector(state=>{
    return state.myDarkMode
  })
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      <Provider store={store}>
      <NavigationContainer theme={CurrentTheme ? defaultBlack : defaultWhite}>
        <stack.Navigator headerMode="none">
          <stack.Screen name="RootHome" component={RootHome}/>
          <stack.Screen name="search" component={search}/>
          <stack.Screen name="VideoPlay" component={videoPlayer}/>
        </stack.Navigator>
      </NavigationContainer>
      </Provider>
    </>
  );
};


//export default App;
