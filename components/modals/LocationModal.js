import { Text, View, Button, Modal, StyleSheet, FlatList, Pressable} from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';


export default class LocationModal extends Component {
  render() {
    
    const onInfoPress = (id) => {
      console.log(id)
      this.props.setLocID(id)
      this.props.setInfoModalVisible(true)
    }

    return (
      <Modal
      animationType='fade'
      transparent={true}
      visible={this.props.isVis}
      onRequestClose={() => {
        alert.alert('Modal has been closed')
        console.log('close Loc')
        setModalVisible(true)
      }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Pressable onPress={this.props.isVisFunc} style={styles.closeBtn}>
            <Icon name="close-circle-outline" size={48} color='grey' />
          </Pressable>
          <FlatList
            data={[
              {key: 0, name: 'CofC Cistern'},
              {key: 1, name: 'Charleston Tech Center'},
              {key: 2, name: 'CofC Lodge'},
              {key: 3, name: 'Harbor Walk East'}

            ]}
            renderItem={({item}) => 
            <Pressable onPress={ () => onInfoPress(item.key)}>
              <Text style={styles.item}>{item.name}</Text>
            </Pressable>
            }
          />
          </View>
        </View>
      </Modal>
    )
  }
}

var styles = StyleSheet.create({ 
  modalView: {
    width: '80%',
    height: '100%',
    marginTop: 0,
    backgroundColor: 'white',
    padding: 36,
    alignItems: 'center',
    borderWidth:1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  closeBtn: {
    left: 100,
  }
})