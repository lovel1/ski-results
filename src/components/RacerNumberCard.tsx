import { Center, Pressable, Text } from 'native-base'
import React, { useContext, useMemo } from 'react'
import { Racer } from '../types'
import { formatTime } from '../utils/formatTime'

type Props = {
    racer: Racer,
    handleRacerFinish: (racer: Racer) => void,
    inProgress: boolean
}

const RacerNumberCard: React.FC<Props> = ({racer, handleRacerFinish, inProgress}) => {

    const buttonStyle = racer.finishTime ? { bg: 'primary.400' } : null
    const textStyle = racer.finishTime ? 'white' : null


    return (
        <Pressable isDisabled={!inProgress} mr={2} mb={2} onPress={() => handleRacerFinish(racer)}>
            <Center w={20} h={20} _dark={buttonStyle || {bg: 'blueGray.700'}} _light={buttonStyle || {bg: 'primary.100'}} borderRadius={'md'} >
                <Text fontSize={'2xl'} fontWeight={'bold'} color={textStyle}>{racer.number}</Text>
                {racer.finishTime && <Text fontSize={12} color={textStyle}>{formatTime(racer.finishTime)}</Text>}
            </Center>
        </Pressable>
    )
}

export default React.memo(RacerNumberCard)