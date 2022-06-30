import React from 'react';
import {Center, Heading, VStack} from 'native-base';
import {useQuery} from '../configs/realmContext';

const StatsScreen = () => {
  const habits = useQuery('Habit');
  console.debug('Poney Habits', habits);
  return (
    <Center
      _dark={{bg: 'blueGray.900'}}
      _light={{bg: 'blueGray.50'}}
      px={4}
      flex={1}>
      <VStack space={5} alignItems="center">
        <Heading size="lg">Stats</Heading>
      </VStack>
    </Center>
  );
};
export default StatsScreen;
