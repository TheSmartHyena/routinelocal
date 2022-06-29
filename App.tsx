import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StatsScreen from './src/pages/stats';
import HabitsScreen from './src/pages/habits';
import ParametersScreen from './src/pages/parameters';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Stats" component={StatsScreen} />
          <Tab.Screen name="Habits" component={HabitsScreen} />
          <Tab.Screen name="Parameters" component={ParametersScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;
