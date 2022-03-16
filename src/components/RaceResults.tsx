import { DrawerScreenProps } from '@react-navigation/drawer'
import { Box, Button, Center, Heading, HStack, ScrollView, Text, VStack } from 'native-base'
import React, { useContext, useEffect, useState } from 'react'
import { Racers, RootDrawerParamList } from '../types'
import { formatTime } from '../utils/formatTime'

type Props = DrawerScreenProps<RootDrawerParamList, 'Results'>

const RaceResults: React.FC<Props> = ({route}) => {
    const { racers } = route.params
    const [sortedRacers, setSortedRacers] = useState<Racers>([])

    useEffect(() => {
        const copiedRacers = [...racers]
        const finishedRacers = 
            copiedRacers.filter(racer => racer.finishTime)
            .sort((prev, curr) => prev.finishTime! - curr.finishTime!)

        const unfinishedRacers = copiedRacers.filter(racer => !racer.finishTime)

        if (unfinishedRacers.length) {
            setSortedRacers([...finishedRacers, ...unfinishedRacers])
        } else {
            setSortedRacers(finishedRacers)
        }

    }, [racers])
    

    return (
    <VStack flex={1}>
        <Heading fontSize={'4xl'} mb={5}>Race Results</Heading>
        <VStack flex={1}>
        <ScrollView overScrollMode={'never'} mb={5}> 
            {sortedRacers.map((racer, index) => {
                return (
                    <HStack alignItems={'center'}>
                        <Text mr={5} fontSize={'xl'} fontWeight={'bold'} w={'10%'} textAlign={'center'}>
                            {index + 1}.
                        </Text>
                        <HStack flex={1} _dark={{bg: 'blueGray.700'}} _light={{bg: 'primary.100'}} p={3} my={1} borderRadius={'sm'} alignItems={'center'}>
                            <Text mr={2} px={2} bg={'primary.400'} color={'white'} fontWeight={'bold'} fontSize={'lg'} borderRadius={'md'}>
                                {racer.number}
                            </Text>
                            <Text fontSize={'lg'} fontWeight={'bold'}>{formatTime(racer.finishTime!) || 'Has not finished'}</Text>
                        </HStack>
                    </HStack>
                )
            })}
        </ScrollView>
        </VStack>
        <Box w={'100%'}>
            <Button size={'lg'} mb={5}>Send to Google Sheets</Button>
        </Box>
    </VStack>
    )
}

export default RaceResults