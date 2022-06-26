import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Post = ({route}) => {
  React.useEffect(() => {
    if (route.params?.postId) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.postId]);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Post screen!</Text>
      <Text>{route.params?.postId}</Text>
    </View>
  );
};

const PostStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Post" component={Post} />
    </Stack.Navigator>
  );
};

export default PostStackNavigator;
