import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import OnboardingScreen from './Modules/Onboardin';
import LoginDashboard from './Modules/LoginDashboard';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Modules/Home';
import {getCategories, getProducts} from './store/products/actions';
import {useEffect} from 'react';

const Stack = createStackNavigator();

const AppContainer = () => {
  const {isFirstTimeRunningApp, isLogged} = useSelector(
    state => state.sessionReducer,
  );

  const Dispatch = useDispatch();

  useEffect(() => {
    Dispatch(getCategories());
    Dispatch(getProducts());
  }, []);

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
