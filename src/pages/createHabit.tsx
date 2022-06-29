import React from 'react';
import {Center, Heading, VStack} from 'native-base';

const CreateHabitScreen = () => {
  return (
    <Center
      _dark={{bg: 'blueGray.900'}}
      _light={{bg: 'blueGray.50'}}
      px={4}
      flex={1}>
      <VStack space={5} alignItems="center">
        <Heading size="lg">Create habit</Heading>
      </VStack>
    </Center>
  );
};
export default CreateHabitScreen;
