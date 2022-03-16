import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import { VStack } from 'native-base'
import React from 'react'
import ThemeToggler from '../ThemeToggler'

const DrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props} >
        <VStack space="6" my="2" mx="5" alignItems={'center'}>
          <ThemeToggler />
        </VStack>
    </DrawerContentScrollView>
  )
}

export default DrawerContent