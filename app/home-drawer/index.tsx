import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {PROFILE_SCREEN} from '../navigation/screenNames';

import ProfileScreen from '../screens/profile';
import HomeTab from './home-tab';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
        drawerType: 'front',
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      {/* <Drawer.Screen name="HomeTab" component={HomeTab} /> */}
      <Drawer.Screen name={PROFILE_SCREEN} component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
