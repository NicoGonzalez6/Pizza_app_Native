import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../Screens/Login';
import RegisterScreen from '../../Screens/Register';

const Stack = createStackNavigator();

const DashboardLogin = () => {
  return (
    <Stack.Navigator screenOptions={({route}) => ({header: () => null})}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default DashboardLogin;
