import React, {useState} from 'react';
import {StyleSheet, View, Text, SafeAreaView, Button, Modal, Dimensions} from 'react-native';
import LocationModal from './components/modals/LocationModal';
import InfoModal from './components/modals/InfoModal'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

import {createAppContainer} from "react-navigation"
import {createDrawerNavigator} from 'react-navigation-drawer'

import {Feather, FontAwesome, Entypo, Ionicons} from '@expo/vector-icons'

import {
  HomeScreen,
  ScanScreen,
  CofCCisternScreen, 
  HarborWalkEastScreen, 
  // ActivityScreen, 
  // ListScreen, 
  // ReportScreen, 
  // SignOutScreen, 
  // StatisticScreen
} from './screens'

import SideBar from './components/SideBar'

const DrawerNavigator = createDrawerNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
        drawerIcon: ({tintColor}) => <Entypo name='home' size={16} color={tintColor} />
      }
    },
    ScanScreen: {
      screen: ScanScreen,
      navigationOptions: {
        title: 'Scan',
        drawerIcon: ({tintColor}) => <Ionicons name='scan' size={16} color={tintColor} />
      }
    },
    CofCCisternScreen: {
      screen: CofCCisternScreen,
      navigationOptions: {
      title: 'CofC Cistern',
      drawerIcon: ({tintColor}) => <Feather name='map-pin' size={16} color={tintColor} />
    } 
  },
    HarborWalkEastScreen: {
      screen: HarborWalkEastScreen,
      navigationOptions: {
      title: 'Harbor Walk East',
      drawerIcon: ({tintColor}) => <Feather name='map-pin' size={16} color={tintColor} />
    }
  }
},
{
  contentComponent: props => <SideBar {...props} />,

  drawerWidth: Dimensions.get("window").width * 0.85,
  hideStatusBar: true,

  contentOptions: {
    activeBackgroundColor: "rgba(255, 90, 150, 0.2)",
    activeTintColor: '#520c20',
    itemsContainerStyle: {
      marginTop: 16,
      marginHorizontal: 8
    },
    itemStyle: {
      borderRadius: 4
    }
  }
})

export default createAppContainer(DrawerNavigator);



// export default () => {



//   const [locModalVisible, setLocModalVisible] = useState(false)
//   const [infoModalVisible, setInfoModalVisible] = useState(false)
//   const [locID, setLocID] = useState(0)
//   const [menuOpen, setMenuOpen] = useState(false)

//   // const setLocVis = () => {
//   //   console.log('setLocVis')
//   //   setLocModalVisible(!locModalVisible)
//   // }
//   const setLocVis = () => {
//     console.log('setLocVis')
//     setLocModalVisible(!locModalVisible)
//     //setInfoModalVisible(!infoModalVisible)
//   }

//   const setInfoVis = () => {
//     console.log("setInfoVis")
//     setInfoModalVisible(!infoModalVisible)
//   }
//   const setInfo = (id) => {
//     setLocID(id)
//   }

//   const onMenuPress = () => {
//     console.log("hello")

//   }
//   const Tt = () => {
//     console.log(infoModalVisible)
//     setInfoModalVisible(true)
//     console.log(infoModalVisible)
//   }

//   return (
//     <SafeAreaView style={styles.main}>

//     <View style={styles.burgerNav}>
//         <Pressable onPress={setLocVis} >
//           <Text style={styles.navTxt}> <Icon name="menu-outline" size={36} color='grey' /> </Text>
//         </Pressable>
//     </View>
    
//       <LocationModal Rr={Tt} isVisFunc={setLocVis} setInfoModalVisible={setInfoVis} isVis={locModalVisible} setLocID={setLocID}/>
      
//       <InfoModal isVisFunc={setInfoVis} isVis={infoModalVisible}// here goes setInfoVis
//         locID={locID}/>


//     </SafeAreaView>
//   );
// };


