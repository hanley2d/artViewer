/**
 * File: App.js
 * Author: David Hanley
 * Last modified: 2022-04-09
 * 
 * Description: This is the main App file for the project. It controls the navigation of the application.
 * A tab navigator is used instead of the stack navigator that we were shown in class. 
 * It effectively functions in the same way, except the tab navigator has a built-in navigation bottom bar which 
 * I felt worked nicely for this application.
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ArtSearch from './view/ArtSearch';
import BrowseCollections from './view/BrowseCollections';
import ArtDetail from './view/ArtDetail';
import RandomArt from './view/RandomArt';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from './view/components/colors'

const Tab = createBottomTabNavigator();
const App = () => { 
  
  // bottom navbar and customization source: https://reactnavigation.org/docs/tab-based-navigation/
  // solution for how to hide tab bar button came from https://stackoverflow.com/questions/52362166/react-navigation-hide-one-tab
  // icons: https://oblador.github.io/react-native-vector-icons/
  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar backgroundColor={colors.olive}/>
      <Tab.Navigator 
        initialRouteName="ArtSearch" 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'ArtSearch') {
              iconName = focused ? 'search-sharp' : 'search-outline';
            } else if (route.name === 'BrowseCollections') {
              iconName = focused ? 'ios-easel' : 'ios-easel-outline';
            }  else if (route.name === 'RandomArt') {
              iconName = focused ? 'ios-flask' : 'ios-flask-outline';
            } 

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.bright_blue,
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {backgroundColor: colors.offwhite}
        })}
      >
        <Tab.Screen options={{ headerShown: false }} name="ArtSearch" component={ArtSearch} />
        <Tab.Screen 
          options={{title: "Artwork Detail", headerStyle: {backgroundColor: colors.olive}, tabBarButton: props => null,}}
          name="ArtDetail" 
          component={ArtDetail}
          animationEnabled={true}
          animationTypeForReplace={"pop"}  
        />
        <Tab.Screen 
          options={{title: "Browse Collections", headerStyle: {backgroundColor: colors.olive}}} 
          name="BrowseCollections" component={BrowseCollections} />
        <Tab.Screen 
          options={{title: "Random Artwork", headerStyle: {backgroundColor: colors.olive}}}
          name="RandomArt" component={RandomArt} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;