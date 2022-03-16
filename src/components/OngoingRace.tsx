import { Box, Button, Flex, Heading, Input, ScrollView, SearchIcon, Text, VStack } from 'native-base'
import React, { useEffect, useState } from 'react'
import RacerNumberCard from './RacerNumberCard'
import { DrawerScreenProps } from '@react-navigation/drawer'
import Timer from './Timer'
import { Racer, Racers, RootDrawerParamList } from '../types'

type Props = DrawerScreenProps<RootDrawerParamList, 'Ongoing'> 

const OngoingRace: React.FC<Props> = ({route, navigation}) => {
    const [startTime, setStartTime] = useState<number>(0)
    const [racers, setRacers] = useState<Racers>([])
    const [inProgress, setInProgress] = useState<boolean>(false)
    const { racersNumber } =  route.params

    const initRacersArray = (racersNumber: number) => {
        const racersArray: Racers = [...Array(racersNumber).keys()].map(number => {
            return (
                {
                    number: ++number,
                    finishTime: null
                }
            )
        })

        return racersArray
    }

    useEffect(() => {
        const racersArray = initRacersArray(racersNumber)
        setRacers(racersArray)
    }, [racersNumber])

    const handleRaceStart = () => {
        const currTime = Date.now()
        setStartTime(currTime)
        setInProgress(true)
    }

    const handleRaceEnd = () => {
        setInProgress(false)
        navigation.navigate('Results', { racers })
    }

    const handleRacerFinish = (racer: Racer) => {
        const time = Date.now() - startTime
        const racerKey = racer.number - 1
        const racersToEdit: Racers =  [...racers]
        racersToEdit[racerKey].finishTime = time
        setRacers(racersToEdit)
    }

    const onMainButtonPress = () => {
        if (!inProgress) {
            handleRaceStart()
        } else {
            handleRaceEnd()
        }
    }

    return (
    <VStack flex={1}>
        <Box justifyContent={'space-between'} mb={5}>
            <Heading fontSize={'4xl'} mb={3}>Race</Heading>
            <Timer inProgress={inProgress} startTime={startTime}/>
        </Box>
        <Box flex={1}>
            <Heading mb={2}>All Racers</Heading>
            <Text>Press on the racer's number in order to mark him/her as finished.</Text>
            <Input keyboardType='number-pad' size={'md'} variant={'underlined'} placeholder='Search by racer' mb={5} InputLeftElement={<SearchIcon size="4" />}/>
            <ScrollView overScrollMode={'never'}>
            <Flex direction={'row'} flexWrap={'wrap'} >
                {racers.map((racer) => {
                    return (
                        <RacerNumberCard racer={racer} inProgress={inProgress} key={racer.number} handleRacerFinish={handleRacerFinish}/>
                    )
                })}
            </Flex>
            </ScrollView>
        </Box>
        <Box w={'100%'}>
            <Button size={'lg'} my={5} onPress={onMainButtonPress}>{inProgress ? 'End Race' : 'Start Race'}</Button>
        </Box>
    </VStack>
    )
}

export default OngoingRace