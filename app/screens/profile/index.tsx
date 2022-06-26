import React from 'react';
import {Button, Text, View} from 'react-native';

const ProfileScreen = ({navigation}) => {
  return (
    <View>
      <Text>This is 's profile</Text>
      <Button
        title="Go to Settings"
        onPress={() =>
          navigation.navigate('Root', {
            screen: 'Home',
            params: {user: 'jane'},
          })
        }
      />
    </View>
  );
};
export default ProfileScreen;
