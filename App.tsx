import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { ApplicationsStackNavigator } from './src/navigators';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <ApplicationsStackNavigator />
    </NavigationContainer>
  );
};

export default App;
