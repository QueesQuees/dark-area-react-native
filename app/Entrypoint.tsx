import React from 'react';
import Navigation from './navigation';
// import {store} from 'app/store';
import {store} from './store';
import {Provider} from 'react-redux';
import {SafeAreaProvider, initialWindowMetrics} from 'react-native-safe-area-context';
import {HOME_SCREEN} from './navigation/screenNames';

const BootScreen: React.FC = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Navigation initialRouteName={HOME_SCREEN} />
    </SafeAreaProvider>
  );
};

const EntryPoint: React.FC = () => {
  return (
    <Provider store={store}>
      <BootScreen />
    </Provider>
  );
};

export default EntryPoint;
