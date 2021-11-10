import React from 'react';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';

import store from 'Store';
import {AppNavigator} from 'Navigation';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0e444d',
  },
};

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <AppNavigator />
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
