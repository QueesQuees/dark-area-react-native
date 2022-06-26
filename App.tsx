import React from 'react';
// import {StatusBar} from 'react-native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

// import {NavigationContainer} from '@react-navigation/native';
// import DrawerNavigator from './app/navigation/DrawerNavigation';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppNavigator} from './app/navigation/navigation.component';
// import {StatusBar} from 'react-native';

const theme = eva.dark;

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      {/* <StatusBar backgroundColor={'#ccc'} /> */}
      <ApplicationProvider {...eva} theme={theme}>
        <AppNavigator />
        {/* <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name={'DrawerNavigator'} component={DrawerNavigator} />
            <Stack.Screen name={'PostDetail'} component={PostDetail} />
          </Stack.Navigator>
        </NavigationContainer> */}
      </ApplicationProvider>
    </>
  );
};

export default App;
