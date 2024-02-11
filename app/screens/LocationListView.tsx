/**a
 * This is the LocationListView screen. It contains the list of Location.
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

// Create a new type for the LocationScreenNavigationProp
type LocationListViewScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList, 'LocationListView'>,
  NativeStackNavigationProp<RootStackParamList>
>;

// Create a Props for this component
type Props = {
  navigation: LocationListViewScreenNavigationProp;
};

// Create the Settings component
const LocationListView = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Generate the list here</Text>
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

export default LocationListView;
