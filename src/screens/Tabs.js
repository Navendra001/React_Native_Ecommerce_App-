// import {Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'; //user
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'; //user
import IoniconIcon from 'react-native-vector-icons/Ionicons'; //user
import {NavigationContainer} from '@react-navigation/native';

import Home from './Home';
import Favourite from './Favourite';
import AddToCart from './AddToCart';
import UserProfile from './UserProfile';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          headerShown: 'false',
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'grey',
          tabBarIcon: ({focused, iconSize = 25}) => {
            let iconName;
            let rn = route.name;
            if (rn === 'Home') {
              iconName = focused ? (
                <IoniconIcon name="home" size={iconSize} color="red" />
              ) : (
                <IoniconIcon name="home-outline" size={iconSize} color="grey" />
              );
            } else if (rn === 'Favourite') {
              iconName = focused ? (
                <AntDesignIcon name="heart" size={iconSize} color="red" />
              ) : (
                <AntDesignIcon name="hearto" size={iconSize} color="grey" />
              );
            } else if (rn === 'AddToCart') {
              iconName = focused ? (
                <MaterialCommunityIcon
                  name="cart"
                  size={iconSize}
                  color="red"
                />
              ) : (
                <MaterialCommunityIcon
                  name="cart-outline"
                  size={iconSize}
                  color="grey"
                />
              );
            } else {
              iconName = focused ? (
                <FontAwesomeIcon
                  name="user-circle"
                  size={iconSize}
                  color="red"
                />
              ) : (
                <FontAwesomeIcon
                  name="user-circle-o"
                  size={iconSize}
                  color="grey"
                />
              );
            }

            return iconName;
          },
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Favourite"
          component={Favourite}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="AddToCart"
          component={AddToCart}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="UserProfile"
          component={UserProfile}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;

// const styles = StyleSheet.create({});
