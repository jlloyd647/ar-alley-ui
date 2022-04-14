import React, {useState} from 'react';
import {StyleSheet, View, Text, SafeAreaView, Button, Modal, Dimensions} from 'react-native';
import LocationModal from './components/modals/LocationModal';
import InfoModal from './components/modals/InfoModal'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

export default () => {



  const [locModalVisible, setLocModalVisible] = useState(false)
  const [infoModalVisible, setInfoModalVisible] = useState(false)
  const [locID, setLocID] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  const setLocVis = () => {
    console.log('setLocVis')
    setLocModalVisible(!locModalVisible)
  }
  const setInfoVis = () => {
    setInfoModalVisible(!infoModalVisible)
  }
  const setInfo = (id) => {
    setLocID(id)
  } 

  // const onMenuPress = () => {
  //   console.log("hello")

  // }

  return (
    <SafeAreaView style={styles.main}>

    <View style={styles.burgerNav}>
        <Pressable onPress={setLocVis} >
          <Text style={styles.navTxt}> <Icon name="menu-outline" size={36} color='grey' /> </Text>
        </Pressable>
    </View>
    
      <LocationModal isVisFunc={setLocVis} setInfoModalVisible={setInfoModalVisible} isVis={locModalVisible} setLocID={setLocID}/>
      
      <InfoModal isVisFunc={setInfoVis} isVis={infoModalVisible}
        locID={locID}/>


    </SafeAreaView>
  );
};