import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import OnboardingScreen from './Modules/Onboardin';
import LoginDashboard from './Modules/LoginDashboard';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Modules/Home';

const Stack = createStackNavigator();

const AppContainer = () => {
  const {isFirstTimeRunningApp, isLogged} = useSelector(
    state => state.sessionReducer,
  );

  if (isFirstTimeRunningApp) {
    return (
      <Stack.Navigator screenOptions={({route}) => ({header: () => null})}>
        <Stack.Screen name="onboarding" component={OnboardingScreen} />
      </Stack.Navigator>
    );
  }

  if (!isFirstTimeRunningApp && !isLogged) {
    return (
      <Stack.Navigator screenOptions={({route}) => ({header: () => null})}>
        <Stack.Screen name="login_dashboard" component={LoginDashboard} />
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator screenOptions={({route}) => ({header: () => null})}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default AppContainer;
