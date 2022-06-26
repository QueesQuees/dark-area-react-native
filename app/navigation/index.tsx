import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import RNBootSplash from 'react-native-bootsplash';

import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';

import {HOME_DRAWER, HOME_SCREEN} from './screenNames';
import {PROFILE_SCREEN} from './screenNames';
import {navigationRef} from './rootNavigation';
import HomeDrawer from '../home-drawer';

export type RootStackParamList = {
  HomeDrawer: undefined;
  [HOME_SCREEN]: undefined;
  [PROFILE_SCREEN]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

interface NavigationProps {
  initialRouteName: keyof RootStackParamList;
}
const Navigation: React.FC<NavigationProps> = ({initialRouteName}) => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={HOME_SCREEN}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={HOME_DRAWER} component={HomeDrawer} />
        <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen name={PROFILE_SCREEN} component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
