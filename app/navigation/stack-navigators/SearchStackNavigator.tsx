import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SearchScreen from '../../screens/search';

const Stack = createStackNavigator();

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default SearchStackNavigator;
