import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { useColorMode } from 'native-base'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const NavigationWrapper = (props: Props) => {
    const { colorMode } = useColorMode()

    return (
        <NavigationContainer theme={colorMode === 'dark' ? DarkTheme : DefaultTheme}>
            {props.children}
        </NavigationContainer>
    )
}

export default NavigationWrapper