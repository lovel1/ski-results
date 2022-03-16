import { Box, Button, Text } from 'native-base'
import React, { useContext, useEffect, useState } from 'react'
import { formatTime } from '../utils/formatTime'

type Props = {
    inProgress: boolean,
    startTime: number
}

const Timer: React.FC<Props> = ({inProgress, startTime}) => {
    const [time, setTime] = useState<number>(0)
    
    useEffect(() => {
        let interval: ReturnType<typeof setInterval>

        if (inProgress) {
            interval = setInterval(() => {
                setTime(Date.now() - startTime)
            }, 10)
        } else if (!inProgress) {
            clearInterval(interval!)
            setTime(0)
        }
        
        return () => clearInterval(interval)
    }, [inProgress])

    
    return (
        <Box>
            <Text fontSize={'4xl'} color={'primary.400'} fontWeight={'bold'}>{formatTime(time) || '00:00:00:00'}</Text>
        </Box>
    )
}

export default Timer