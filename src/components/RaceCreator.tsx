import { DrawerScreenProps } from '@react-navigation/drawer'
import { Box, Button, Center, Heading, Input, Text, VStack } from 'native-base'
import React, { useState } from 'react'
import { RootDrawerParamList } from '../types'

type Props = DrawerScreenProps<RootDrawerParamList, 'Init'>

const RaceCreator: React.FC<Props> = ({navigation}) => {
    const [ racersNumber, setRacersNumber ] = useState<string>('')

    const handleSubmit = (racersNumber: string) => {
        navigation.navigate('Ongoing', { racersNumber:  +racersNumber})
    }

    return (
        <Box>
            <Heading fontSize={'4xl'} mb={5}>New Race</Heading>
            <Input 
              size='md' 
              keyboardType='number-pad' 
              placeholder='Number of racers' 
              mb={5}
              onChangeText={inputValue => setRacersNumber(inputValue)} 
              value={racersNumber}
              maxLength={3}
            />
            <Button isDisabled={!racersNumber} onPress={() => handleSubmit(racersNumber)}>Create Race</Button>
        </Box>
    )
}

export default RaceCreator