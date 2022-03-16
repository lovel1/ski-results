import { DrawerScreenProps } from '@react-navigation/drawer'
import React from 'react'
import RaceResults from '../components/RaceResults'
import RaceResult from '../components/RaceResults'
import ScreenContainer from '../components/ScreenContainer'
import { RootDrawerParamList } from '../types'

type Props = DrawerScreenProps<RootDrawerParamList, 'Results'>

const RaceResultsScreen: React.FC<Props> = ({navigation, route}) => {
  return (
    <ScreenContainer>
        <RaceResults navigation={navigation} route={route}/>
    </ScreenContainer>
  )
}

export default RaceResultsScreen