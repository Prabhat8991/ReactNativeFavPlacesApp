import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AllPlaces from './screens/AllPlaces';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddPlace from './screens/AddPlace';
import IconButton from './components/UI/IconButton';
import { Colors } from './components/constants/colors';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: Colors.gray700,
          contentStyle: { backgroundColor: Colors.gray700 }
        }}>
          <Stack.Screen name='AllPlaces' component={AllPlaces} options={({ navigation }) => ({

            headerRight: ({ tintColor }) => (<IconButton icon="add" color={tintColor} size={24} onPress={() => navigation.navigate('AddPlace')} />)

          })}
          />
          <Stack.Screen name='AddPlace' component={AddPlace} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}