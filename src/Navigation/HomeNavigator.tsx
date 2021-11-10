import {createStackNavigator} from '@react-navigation/stack';
import React, {ReactElement} from 'react';

import {FilmListScreen, FilmProfileScreen} from 'Module/Home/Screens';
import {HOME_NAVIGATION_ROUTES} from 'Navigation/routes.enum';
import {HeaderBackButton} from 'Components/buttons';
import {vrem} from 'Utils/dimensions';

const Stack = createStackNavigator();

export function HomeNavigator(): ReactElement {
  return (
    <Stack.Navigator initialRouteName={HOME_NAVIGATION_ROUTES.FIlM_LIST}>
      <Stack.Screen
        name={HOME_NAVIGATION_ROUTES.FIlM_LIST}
        options={{
          headerShown: true,
          title: 'Episodes',
          headerTitleStyle: {
            fontSize: vrem(24),
          },
        }}
        component={FilmListScreen}
      />
      <Stack.Screen
        name={HOME_NAVIGATION_ROUTES.FILM_PROFILE}
        options={{
          headerShown: true,
          headerTransparent: true,
          title: '',
          headerBackTitle: '',
          headerLeft: ({onPress}) => {
            return <HeaderBackButton onPress={onPress} />;
          },
        }}
        component={FilmProfileScreen}
      />
    </Stack.Navigator>
  );
}
