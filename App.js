import React, { useEffect, useState } from 'react';
import { StatusBar, Easing } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ArtSearch from './view/ArtSearch';
import BrowseCollections from './view/BrowseCollections';
import ArtDetail from './view/ArtDetail';

const Stack = createNativeStackNavigator();

const App = () => { 
  
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator initialRouteName="ArtSearch" >
        <Stack.Screen options={{ headerShown: false }} name="ArtSearch" component={ArtSearch} />
        <Stack.Screen 
          options={{title: "Artwork Detail"}}
          name="ArtDetail" 
          component={ArtDetail}
          animationEnabled={true}
          animationTypeForReplace={"pop"}  
        />
        <Stack.Screen name="BrowseCollections" component={BrowseCollections} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;