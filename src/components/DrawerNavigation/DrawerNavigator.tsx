import { createDrawerNavigator } from '@react-navigation/drawer';
import { Box } from 'native-base'
import React from 'react'
import OngoingRaceScreen from '../../screens/OngoingRaceScreen';
import RaceInitScreen from '../../screens/RaceInitScreen';
import RaceResultsScreen from '../../screens/RaceResultsScreen';
import { RootDrawerParamList } from '../../types';
import DrawerContent from './DrawerContent';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator<RootDrawerParamList>()

  return (
    <Box h={'100%'}>
        <Drawer.Navigator 
          drawerContent={(props) => <DrawerContent {...props}/>} 
          screenOptions={{
            headerShown: false
          }}
          initialRouteName="Init"
          >
            <Drawer.Screen name="Init" component={RaceInitScreen} />
            <Drawer.Screen name="Ongoing" component={OngoingRaceScreen} />
            <Drawer.Screen name="Results" component={RaceResultsScreen} />
        </Drawer.Navigator>
    </Box>
  )
}

export default DrawerNavigator