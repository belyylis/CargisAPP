import React from 'react';
import { View } from 'react-native';
import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import { Palette, Screens } from 'consts';
import { ApplicationsScreen } from 'screens';

const STACK = createStackNavigator();

const StackNavigatorScreenOptions: StackNavigationOptions = {
  headerShown: false,
};

const ApplicationsStackNavigator = () => {
  return (
    <STACK.Navigator
      screenOptions={StackNavigatorScreenOptions}
      initialRouteName={Screens.ApplicationsScreen}>
      <STACK.Screen
        name={Screens.ApplicationsScreen}
        component={ApplicationsScreen}
      />
      <STACK.Screen
        name={Screens.ApplicationDetailScreen}
        component={() => (
          <View style={{ flex: 1, backgroundColor: Palette.BLUE_GRAY }}></View>
        )}
      />
    </STACK.Navigator>
  );
};

export default ApplicationsStackNavigator;
