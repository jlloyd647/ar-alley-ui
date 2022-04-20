import React from 'react'
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'
import {FontAwesome5} from '@expo/vector-icons'

export default class Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={{flex: 1}}>
                    <TouchableOpacity 
                    style={{alignItems: 'flex-start', marginLeft: 18, marginTop:25}} 
                    onPress={this.props.navigation.openDrawer}
                    >
                        <FontAwesome5 name="bars" size={24} color='#161924' />
                    </TouchableOpacity>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
                        <Text style={styles.text}>{this.props.name} Screen</Text>
                        <Text>something</Text>
                    </View>
                    
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFF',
    },
    text: {
        color: '#161924',
        fontSize: 20,
        fontWeight: '500'
    }
})