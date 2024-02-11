/**
 *
 * This is the main navigation file. It contains the main tab navigator and the root stack navigator.
 *
 * @author Faniry Razafindrazaka
 * @created 11.02.2024
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BaccListView from './screens/BaccListView';
import FiliereListView from './screens/FiliereListView';
import LocationListView from './screens/LocationListView';
import Settings from './screens/Settings';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabBarIcon from './components/TabBarIcon';

// Create a new type for the MainTabParamList
export type MainTabParamList = {
  BaccListView: undefined;
  FiliereListView: undefined;
  LocationListView: undefined;
  Settings: undefined;
};

export type RootStackParamList = {
  MainTab: undefined;
};

// Create a new tab navigator for the MainTabParamList
const Tab = createBottomTabNavigator<MainTabParamList>();

// Initialize MainTab
const MainTab = () => {
  return (
    <Tab.Navigator initialRouteName={'BaccListView'}>
      <Tab.Screen
        name="Bacc"
        options={{
          title: 'Bacc',
          tabBarIcon: props => <TabBarIcon {...props} name="school" />,
        }}
        component={BaccListView}
      />
      <Tab.Screen
        name="FiliereListView"
        options={{
          title: 'Filiere',
          tabBarIcon: props => <TabBarIcon {...props} name="bank" />,
        }}
        component={FiliereListView}
      />
      <Tab.Screen
        name="LocationListView"
        options={{
          title: 'Location',
          tabBarIcon: props => <TabBarIcon {...props} name="map-marker" />,
        }}
        component={LocationListView}
      />
      <Tab.Screen
        name="Settings"
        options={{
          title: 'Settings',
          tabBarIcon: props => <TabBarIcon {...props} name="cog" />,
        }}
        component={Settings}
      />
    </Tab.Navigator>
  );
};

// Create a new stack navigator for the RootStackParamList
const RootStack = createNativeStackNavigator<RootStackParamList>();

// Define the AppNavigation
const AppNavigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="MainTab"
        options={{headerShown: false}}
        component={MainTab}
      />
    </RootStack.Navigator>
  );
};

export default AppNavigation;
