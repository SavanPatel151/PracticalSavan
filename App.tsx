import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import screens from './source/screens';
import Home from './source/screens/Home';
import DeviceDetails from './source/screens/DeviceDetails';
import Account from './source/screens/Account';

export const ScreenOptions = {
  headerShown: false,
  gestureEnabled: false,
};


const App = () => {

 
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='screens' component={screens} options={ScreenOptions}/>
        <Stack.Screen name='Home' component={Home} options={ScreenOptions}/>
        <Stack.Screen name='DeviceDetails' component={DeviceDetails} options={ScreenOptions}/>
        <Stack.Screen name='Account' component={Account} options={ScreenOptions}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;