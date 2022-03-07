import React from 'react';
import HomeScreen from '../../Screens/Home';
import CartScreen from '../../Screens/Cart';
import DeliveryScreen from '../../Screens/Delivery';
import ProfileScreen from '../../Screens/Profile';
import ProductDetailScreen from '../../Screens/Food-Details';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import FontAwsome from 'react-native-vector-icons/FontAwesome';
import GlobalStyles from '../../assets/styles';

const Tab = createBottomTabNavigator();

const Index = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarButton: ['Details'].includes(route.name)
          ? () => {
              return null;
            }
          : undefined,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          color = focused
            ? GlobalStyles.colors.mainColor
            : GlobalStyles.colors.softGrey;
          size = focused ? 26 : 20;
          if (route.name == 'Home') {
            iconName = 'home';
          } else if (route.name == 'Cart') {
            iconName = 'cart-plus';
          } else if (route.name == 'Delivery') {
            iconName = 'truck';
          } else if (route.name == 'Profile') {
            iconName = 'user';
          }

          return <FontAwsome name={iconName} size={size} color={color} />;
        },
        tabBarLabelStyle: {
          fontFamily: GlobalStyles.fonts.mainFont,
          color: GlobalStyles.colors.black,
        },
      })}>
      <Tab.Screen
        options={{header: () => null}}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{header: () => null}}
        name="Cart"
        component={CartScreen}
      />
      <Tab.Screen
        options={{header: () => null}}
        name="Delivery"
        component={DeliveryScreen}
      />
      <Tab.Screen
        options={{header: () => null}}
        name="Profile"
        component={ProfileScreen}
      />
      <Tab.Screen
        options={{header: () => null}}
        name="Details"
        component={ProductDetailScreen}
      />
    </Tab.Navigator>
  );
};

export default Index;
