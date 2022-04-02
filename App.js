import React, { useEffect, useState } from 'react';
import { View, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ArtSearch from './view/ArtSearch';
import BrowseCollections from './view/BrowseCollections';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator initialRouteName="ArtSearch">
        <Stack.Screen options={{ headerShown: false }} name="ArtSearch" component={ArtSearch} />
        <Stack.Screen name="BrowseCollections" component={BrowseCollections} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;