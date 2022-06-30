import React, {useCallback} from 'react';
import {Button, Center, Heading, VStack} from 'native-base';

import {useRealm} from '../configs/realmContext';
import {Habit} from '../models/Habits';

const CreateHabitScreen = () => {
  const realm = useRealm();
  const handleAddHabit = useCallback((): void => {
    realm.write(() => {
      realm.create('Habit', Habit.generate('Faire sport'));
    });
  }, [realm]);

  return (
    <Center
      _dark={{bg: 'blueGray.900'}}
      _light={{bg: 'blueGray.50'}}
      px={4}
      flex={1}>
      <VStack space={5} alignItems="center">
        <Heading size="lg">Create habit</Heading>
        <Button onPress={handleAddHabit} colorScheme="success">
          Create a habit
        </Button>
      </VStack>
    </Center>
  );
};
export default CreateHabitScreen;
