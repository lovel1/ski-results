import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useEffect } from 'react'
import OngoingRace from '../components/OngoingRace';
import ScreenContainer from '../components/ScreenContainer';
import { RootDrawerParamList } from '../types';

type Props = DrawerScreenProps<RootDrawerParamList, 'Ongoing'>

const OngoingRaceScreen: React.FC<Props> = ({route, navigation}) => {
  return (
    <ScreenContainer>
      <OngoingRace route={route} navigation={navigation}/>
    </ScreenContainer>
  )
}


export default OngoingRaceScreen