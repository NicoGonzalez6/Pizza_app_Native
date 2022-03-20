import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import AppContainer from './AppContainer';
import {store} from './store/reducer';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PaperProvider>
          <AppContainer />
        </PaperProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
