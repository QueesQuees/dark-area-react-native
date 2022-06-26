import React from 'react';
import {Button} from 'react-native';
import {navigate} from '../../navigation/rootNavigation';
import {PROFILE_SCREEN} from '../../navigation/screenNames';

const SettingScreen = () => {
  return <Button title="Go to Jane's profile" onPress={() => navigate(PROFILE_SCREEN)} />;
};

export default SettingScreen;
