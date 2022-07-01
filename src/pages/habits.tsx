import React, {useState} from 'react';

import {Heading, VStack, Center, ScrollView, Fab, AddIcon} from 'native-base';
import {SwipeListView} from 'react-native-swipe-list-view';
import {useQuery} from '../configs/realmContext';
import CreateHabitScreen from './createHabit';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {renderItem} from './habitsComponents/renderItem';
import {renderHiddenItem} from './habitsComponents/renderItemHidden';

const Stack = createNativeStackNavigator();

export const HabitsComponent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Habits" component={HabitsScreen} />
      <Stack.Screen name="CreateHabit" component={CreateHabitScreen} />
    </Stack.Navigator>
  );
};

export const HabitsScreen = ({navigation}: any) => {
  const habits = useQuery('Habit');
  console.debug('Poney Habits', habits);

  const todo = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      fullName: 'Afreen Khan',
      timeStamp: '12:47 PM',
      recentText: 'Good Day!',
      avatarUrl:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      fullName: 'Sujita Mathur',
      timeStamp: '11:11 PM',
      recentText: 'Cheer up, there!',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      fullName: 'Anci Barroco',
      timeStamp: '6:22 PM',
      recentText: 'Good Day!',
      avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
    },
  ];

  const done = [
    {
      id: '68694a0f-3da1-431f-bd56-142371e29d72',
      fullName: 'Aniket Kumar',
      timeStamp: '8:56 PM',
      recentText: 'All the best',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Kiara',
      timeStamp: '12:47 PM',
      recentText: 'I will call today.',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
  ];

  const [todoList] = useState(todo);
  const [doneList] = useState(done);

  return (
    <Center
      _dark={{bg: 'blueGray.900'}}
      _light={{bg: 'blueGray.50'}}
      px={4}
      flex={1}>
      <VStack space={5} alignItems="center">
        <Heading size="lg">Todo</Heading>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SwipeListView
            data={todoList}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            stopLeftSwipe={130}
            disableLeftSwipe
            previewRowKey={'0'}
            previewOpenValue={-40}
            previewOpenDelay={3000}
          />
        </ScrollView>

        <Heading size="lg">Done</Heading>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SwipeListView
            data={doneList}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            stopRightSwipe={-130}
            disableRightSwipe
            previewRowKey={'0'}
            previewOpenValue={-40}
            previewOpenDelay={3000}
          />
        </ScrollView>
      </VStack>
      <Fab
        renderInPortal={false}
        shadow={2}
        size="sm"
        icon={<AddIcon />}
        onPress={() => {
          navigation.navigate('CreateHabit');
        }}
      />
    </Center>
  );
};
