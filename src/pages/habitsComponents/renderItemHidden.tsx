import React from 'react';
import {HStack, VStack, Pressable, Icon, Text} from 'native-base';
import {MaterialIcons, Entypo} from '@expo/vector-icons';

export const renderHiddenItem = () => (
  <HStack flex="1" pl="2">
    <Pressable w="130" ml="auto" bg="green.500" justifyContent="center">
      <VStack alignItems="center" space={2}>
        <Icon
          as={<Entypo name="dots-three-horizontal" />}
          size="xs"
          color="coolGray.800"
        />
        <Text fontSize="xs" fontWeight="medium" color="coolGray.800">
          More
        </Text>
      </VStack>
    </Pressable>
    <Pressable w="130" bg="red.500" justifyContent="center">
      <VStack alignItems="center" space={2}>
        <Icon as={<MaterialIcons name="delete" />} color="white" size="xs" />
        <Text color="white" fontSize="xs" fontWeight="medium">
          Delete
        </Text>
      </VStack>
    </Pressable>
  </HStack>
);
