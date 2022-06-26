import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HOME_SCREEN} from '../../navigation/screenNames';

import HomeScreen from '../../screens/home';

const Tab = createBottomTabNavigator();

const HomeTab: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={HOME_SCREEN} component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default HomeTab;
