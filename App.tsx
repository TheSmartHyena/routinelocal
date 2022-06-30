import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StatsScreen from './src/pages/stats';
import {HabitsComponent} from './src/pages/habits';
import ParametersScreen from './src/pages/parameters';
import {RealmProvider} from './src/configs/realmContext';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <RealmProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Stats" component={StatsScreen} />
            <Tab.Screen
              name="HabitsComponent"
              component={HabitsComponent}
              options={{headerShown: false}}
            />
            <Tab.Screen name="Parameters" component={ParametersScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </RealmProvider>
  );
};
export default App;
