/**
 * This is the BaccListView screen. It contains the list of Bacc.
 *
 * @author Faniry Razafindrazaka
 * @created 11.02.2024
 * @todo Add actual implementation
 */

import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainTabParamList, RootStackParamList} from '../AppNavigation';
import {StyleSheet, Text, View} from 'react-native';

// Create a new type for the BaccScreenNavigationProp
type BaccListViewScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList, 'BaccListView'>,
  NativeStackNavigationProp<RootStackParamList>
>;

// Create a Props for this component
type Props = {
  navigation: BaccListViewScreenNavigationProp;
};

// Create the Settings component
const BaccListView = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>A</Text>
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

export default BaccListView;
