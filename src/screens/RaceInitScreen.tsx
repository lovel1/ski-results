import { DrawerScreenProps } from '@react-navigation/drawer'
import React from 'react'
import RaceCreator from '../components/RaceCreator'
import ScreenContainer from '../components/ScreenContainer'
import { RootDrawerParamList } from '../types'

type Props = DrawerScreenProps<RootDrawerParamList, 'Init'>

const RaceInitScreen: React.FC<Props> = ({navigation, route}) => {
  return (
    <ScreenContainer>
      <RaceCreator navigation={navigation} route={route}/>
    </ScreenContainer>
  )
}

export default RaceInitScreen