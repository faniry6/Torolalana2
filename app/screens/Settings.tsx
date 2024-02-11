/**
 * This is the settings screen. It contains the settings of the app.
 *
 * @author Faniry Razafindrazaka
 * @created 11.02.2024
 * @todo Add actual implementation
 */
import React from 'react';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainTabParamList, RootStackParamList} from '../AppNavigation';
import {StyleSheet, Text, View} from 'react-native';

// Create a new type for the BaccScreenNavigationProp
type SettingsScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList, 'Settings'>,
  NativeStackNavigationProp<RootStackParamList>
>;

// Create a Props for this component
type Props = {
  navigation: SettingsScreenNavigationProp;
};

// Create the Settings component
const Settings = () => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  );
};

// Create the styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Settings;
