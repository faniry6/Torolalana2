/**
 * This is the main entry for the application
 *
 * @author Faniry Razafindrazaka
 * @created 11.02.2024
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './app/AppNavigation';

// Create the upper level component
function RunApp() {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}

export default class App extends React.Component {
  render() {
    return <RunApp />;
  }
}
