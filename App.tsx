import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StatsScreen from './src/pages/stats';
import {HabitsComponent} from './src/pages/habits';
import ParametersScreen from './src/pages/parameters';
import {RealmProvider} from './src/configs/realmContext';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <RealmProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({size}) => {
                let iconName = '';
                if (route.name === 'Stats') {
                  iconName = 'stats-chart-outline';
                } else if (route.name === 'HabitsComponent') {
                  iconName = 'list-outline';
                } else if (route.name === 'Parameters') {
                  iconName = 'options-outline';
                }

                return <Icon name={iconName} size={size} color="#4F8EF7" />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen name="Stats" component={StatsScreen} />
            <Tab.Screen
              name="HabitsComponent"
              component={HabitsComponent}
              options={{headerShown: false, tabBarLabel: 'Habits'}}
            />
            <Tab.Screen name="Parameters" component={ParametersScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </RealmProvider>
  );
};
export default App;
