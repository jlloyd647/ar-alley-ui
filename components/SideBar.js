import React  from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import { DrawerNavigatorItems } from 'react-navigation-drawer'
import {Ionicons} from '@expo/vector-icons'

export default Sidebar = props => (
    <ScrollView>
        <View style={{marginBottom: 5, marginTop: 15, alignItems: 'center', }}>
            <Text style={{fontSize: 25}}>
                Spots
            </Text>
        </View>
        {/* Empty view to make horizontal line*/}
        <View style={{borderBottomColor: 'rgba(100, 90, 207, 0.4)', borderBottomWidth: 1}}></View>

        <View style={styles.container}>
            <DrawerNavigatorItems {...props} />
        </View>
    </ScrollView>
)

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        profile: {
            width: 80,
            height: 80,
            borderRadius: 40,
            borderWidth: 3,
            borderColor: '#FFF'
        },
        name: {
            color: '#FFF',
            fontSize: 20,
            fontWeight: "800",
            marginVertical: 8
        },
        followers: {
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: 13,
            marginRight: 4
        }
    }
)