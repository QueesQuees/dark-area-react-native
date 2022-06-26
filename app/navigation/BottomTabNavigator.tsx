import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStackNavigator from './stack-navigators/HomeStackNavigator';
import MineStackNavigator from './stack-navigators/MineStackNavigator';
import SearchStackNavigator from './stack-navigators/SearchStackNavigator';
import {StyleSheet, Text} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEarthAsia} from '@fortawesome/free-solid-svg-icons';
import {faUserAstronaut} from '@fortawesome/free-solid-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

const BototmTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Top"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Top</Text>,
          tabBarIcon: () => <FontAwesomeIcon icon={faEarthAsia} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackNavigator}
        options={{
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Search</Text>,
          tabBarIcon: () => <FontAwesomeIcon icon={faSearch} />,
        }}
      />
      <Tab.Screen
        name="Mine"
        component={MineStackNavigator}
        options={{
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Mine</Text>,
          tabBarIcon: () => <FontAwesomeIcon icon={faUserAstronaut} />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    color: '#292929',
    fontSize: 12,
  },
});

export default BototmTabNavigator;
