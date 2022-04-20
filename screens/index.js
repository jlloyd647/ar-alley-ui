import React from 'react'
import Screen from './Screen'

export const HomeScreen = ({navigation}) => <Screen navigation={navigation} name="Home" />
export const ScanScreen  = ({navigation}) => <Screen navigation={navigation} name="Scan" />
export const CofCCisternScreen = ({navigation}) => <Screen navigation={navigation} name="CofC Cistern" />
export const HarborWalkEastScreen = ({navigation}) => <Screen navigation={navigation} name="Harbor Walk East" />