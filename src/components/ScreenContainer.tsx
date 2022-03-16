import { Box, VStack } from 'native-base';
import React from 'react'
import { Dimensions } from 'react-native';
import { safeZoneHeight } from '../constants/safeZoneHeight';
import Navbar from './Navbar';

type Props = {
    children: React.ReactNode
}

const ScreenContainer = (props: Props) => {
    const screenHeight = Dimensions.get('screen').height

    return (
      <VStack _dark={{bg: 'blueGray.900'}} _light={{bg: 'blueGray.50'}} minH={screenHeight}>
          <Navbar />
          <Box px={5} pt={safeZoneHeight/2} flex={1}>
              {props.children}
          </Box>
      </VStack>
    )
  }

export default ScreenContainer