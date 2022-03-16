import { StatusBar } from 'expo-status-bar';
import AppContainer from './src/components/AppContainer';
import DrawerNavigator from './src/components/DrawerNavigation/DrawerNavigator';

export default function App() {
  return (
    <AppContainer>
      <DrawerNavigator />
      <StatusBar style="auto" />
    </AppContainer>
  );
}


