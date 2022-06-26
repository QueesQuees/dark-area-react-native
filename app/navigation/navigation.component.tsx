import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Drawer, DrawerItem, IndexPath} from '@ui-kitten/components';
import BototmTabNavigator from './BottomTabNavigator';
import PostDetail from '../screens/postDetails';
const {Navigator, Screen} = createDrawerNavigator();

const DrawerContent = ({navigation, state}) => (
  <Drawer
    selectedIndex={new IndexPath(state.index)}
    onSelect={index => navigation.navigate(state.routeNames[index.row])}>
    <DrawerItem title="Home" />
    {/* <DrawerItem title="Profile" /> */}
  </Drawer>
);

export const DrawerNavigator = () => (
  <Navigator
    screenOptions={{headerShown: false}}
    drawerContent={props => <DrawerContent {...props} />}>
    <Screen name="Home" component={BototmTabNavigator} />
    <Screen name="PostDetail" component={PostDetail} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <DrawerNavigator />
    {/* <Screen name="PostDetail" component={PostDetail} /> */}
  </NavigationContainer>
);
