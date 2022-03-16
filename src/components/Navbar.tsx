import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { Box, HamburgerIcon } from 'native-base'
import React, { useCallback } from 'react'
import { safeZoneHeight } from '../constants/safeZoneHeight';

const Navbar: React.FC = () => {
    const navigation = useNavigation<DrawerNavigationProp<{}>>()

    const handlePressMenuButton = useCallback(() => {
        navigation.openDrawer()
    }, [navigation])

    return (
        <Box pt={safeZoneHeight} 
            w={'100%'} 
            justifyContent={'space-between'}
            px={5}
            flexDirection={'row'}
            _dark={{bg: 'blueGray.900'}} _light={{bg: 'blueGray.50'}}
        >
            <HamburgerIcon onPress={handlePressMenuButton}/>
        </Box>
    )
}

export default Navbar