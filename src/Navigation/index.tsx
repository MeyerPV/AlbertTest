import {NavigationContainer} from '@react-navigation/native';
import React, {ReactElement} from 'react';
import {StatusBar} from 'react-native';

import {HomeNavigator} from './HomeNavigator';

export function AppNavigator(): ReactElement {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <HomeNavigator />
    </NavigationContainer>
  );
}
