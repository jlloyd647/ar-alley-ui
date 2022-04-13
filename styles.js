import React, {useState} from 'react';
import {StyleSheet, Dimensions} from 'react-native';


const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

export default StyleSheet.create({
    main: {
      flex: 2,
      justifyContent: 'flex-end'
    },
    nav: {
      flexDirection: 'row',
      height: '8%',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      backgroundColor: 'black',
    },
    burgerNav: {
        // display: "flex",
        flex: 1,
        height: screenHeight/20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute', 

        top: 0,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
    },
    navTxt: {
      fontSize: 24,
      color: 'white',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22
    },
    
    
  });