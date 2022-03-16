// import { createDrawerNavigator } from '@react-navigation/drawer'
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider, useColorMode, useColorModeValue } from 'native-base'
import React, { useEffect, useState } from 'react'
import theme from '../theme'
import NavigationWrapper from './DrawerNavigation/NavigationWrapper'
import Navbar from './Navbar'
import OngoingRace from './OngoingRace'
import { RacersContext } from './RacersContext'
import ScreenContainer from './ScreenContainer'

type Props = {
    children: React.ReactNode
}

const AppContainer = (props: Props) => {

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationWrapper>
            {props.children}
      </NavigationWrapper>
    </NativeBaseProvider>
  )
}

export default AppContainer