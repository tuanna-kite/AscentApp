import React from "react";
import { useAppDispatch } from "../../store";
import { removeUser } from "../../store/user.reducer";
import { NativeBaseProvider, Box, HStack, Avatar, Icon, IconButton, Text, Image, Button, Center, VStack, View, Divider } from 'native-base';

import { Ionicons } from '@expo/vector-icons';
import appTheme from "../../theme";
import { ImageSourcePropType } from "react-native";


export type SearchCardItemProps = {
  name: string;
  image: string;
};

const SearchCardItem = (props: SearchCardItemProps) => {
  console.log('Image URL:', props.image); // Logging to check what URL is received
  return (
    <>
      <Box width="100%" height="200" backgroundColor="muted.400" px="4" overflow="hidden">
        <HStack justifyContent="space-between" alignItems="center" height="100%">
          <Box maxWidth="47%" width="50%" backgroundColor="green.600" height="96" overflow="hidden" alignItems="center"
            justifyContent="center" borderRadius="8">
            <Text fontWeight="bold" fontSize="16" position="absolute" top="16" left="16" color="muted.50">
              {props.name}
            </Text>
            <Box width="64" height="64" style={{
              position: 'absolute',
              right: -25,
              transform: [{ rotate: '-25deg' }],
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.00,
              elevation: 24,
            }}>
              <Image source={{ uri: props.image }} alt="Rotated Image"
                width="100%" height="100%" borderRadius="8" />
            </Box>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default SearchCardItem;


