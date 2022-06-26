import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

// import HomeStackNavigator from './stack-navigators/HomeStackNavigator';
import PostStackNavigator from './stack-navigators/PostStackNavigator';
import ProfileStackNavigator from './stack-navigators/ProfileStackNavigatior';
import BototmTabNavigator from './BottomTabNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import PostDetail from '../screens/postDetails';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeTabs" component={BototmTabNavigator} />

      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      <Stack.Screen name="PostDetails" component={PostDetail} />
    </Stack.Navigator>
  );
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Root" component={Root} />
      {/* <Drawer.Screen name="HomeTabs" component={BototmTabNavigator} /> */}
      <Drawer.Screen name="PostStack" component={PostStackNavigator} />
      <Drawer.Screen name="Profile" component={ProfileStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
