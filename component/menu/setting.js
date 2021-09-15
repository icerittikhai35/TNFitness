import React, { Component, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function EditProfile({navigation}) {
    function logout() {
        AsyncStorage.removeItem('id')
        navigation.navigate('Login')

    }
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Icon
                        name="arrowleft"
                        size={25}
                        color={'white'}
                    />
                </TouchableOpacity>
                <View>
                    <Text style={{ color: 'white', marginLeft: '20%', marginTop: 0, fontSize: 16, fontWeight: 'bold' }}>ตั้งค่า</Text>
                </View>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                <View style={{ width: '100%', height: 50, borderColor: '#292B2D', borderBottomWidth: 0.5, flexDirection: 'row', paddingTop: 13 }}>
                    <Image
                        style={{ height: 25, width: 25, marginLeft: 15, }}
                        source={require('../../img/icon/user.png')}
                    />
                    <Text style={{ color: 'white', paddingLeft: '5%', paddingTop: 3 }}>แก้ไขข้อมูลส่วนตัว</Text>
                </View>
            </TouchableOpacity>

            <View style={{ width: '100%', height: 50, borderColor: '#292B2D', borderBottomWidth: 0.8, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', paddingTop: 13, }}>
                    <Image
                        style={{ height: 25, width: 25, marginLeft: 15, }}
                        source={require('../../img/icon/bell.png')}
                    />
                    <Text style={{ color: 'white', paddingLeft: '5%', paddingTop: 3 }}>การเเจ้งเตือน</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingRight: '5%' }}>
                    <ToggleSwitch
                        isOn={true}
                        onColor="green"
                        offColor="#292B2D"
                        size="medium"
                        onToggle={isOn => console.log("changed to : ", isOn)}
                    />

                </View>

            </View>

            <View style={{ width: '100%', height: 50, borderColor: '#292B2D', borderBottomWidth: 0.5, flexDirection: 'row', paddingTop: 13 }}>
                <Image
                    style={{ height: 25, width: 25, marginLeft: 15, }}
                    source={require('../../img/icon/contact.png')}
                />
                <Text style={{ color: 'white', paddingLeft: '5%', paddingTop: 3 }}>ติดต่อเรา</Text>
            </View>

            <View style={{ width: '100%', height: 50, borderColor: '#292B2D', borderBottomWidth: 0.5, flexDirection: 'row', paddingTop: 13 }}>
                <Image
                    style={{ height: 25, width: 25, marginLeft: 15, }}
                    source={require('../../img/icon/newspaper.png')}
                />
                <Text style={{ color: 'white', paddingLeft: '5%', paddingTop: 3 }}>รายงานปัญหา</Text>
            </View>
            <TouchableOpacity
                onPress={()=>navigation.navigate('Login',AsyncStorage.removeItem('id'))}
            >
                <View style={{ width: '100%', height: 50, borderColor: '#292B2D', borderBottomWidth: 0.5, flexDirection: 'row', paddingTop: 13 }}>
                    <Image
                        style={{ height: 25, width: 25, marginLeft: 15, }}
                        source={require('../../img/icon/logout.png')}
                    />
                    <Text style={{ color: 'white', paddingLeft: '5%', paddingTop: 3 }}>ออกจากระบบ</Text>
                </View>
            </TouchableOpacity>
        </View >
    );
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#3D3D3D'
    },
    header: {
        backgroundColor: "#292B2D",
        height: 50,
        flexDirection: 'row',
        marginTop: 48,
        alignItems: 'center',
        paddingLeft:'3%'

    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "#ffffff",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 100
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 80,
    },
    bodyContent: {

        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#69BD51",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 7,
        backgroundColor: "#69BD51",
    },
});
