import React, { useState, useEffect } from 'react';
import { TextInput, Text, ScrollView, View, TouchableOpacity, StyleSheet, Button, FlatList, Alert, Modal, Pressable } from 'react-native';
import { ListItem, Header, Image, Tile } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

import axios from 'axios';
import { SliderBox } from 'react-native-image-slider-box';
import { ExerciseBack, } from '../../DataExercise';



export default function PageRCMExercise({ navigation, route }) {
    const { name } = route.params;
    const { volume } = route.params;
    const { round } = route.params;
    const { weight } = route.params;
    const { breaks } = route.params;
    const { description } = route.params;
    const { equipment } = route.params;
    const { Imageequipment } = route.params;
    const { imageUrls } = route.params;


    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText] = React.useState('');
    return (
        <>

            <Header
                placement="center"
                leftComponent={
                    <View style={{ marginTop: 0, alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => { navigation.goBack() }}>
                            <Icon
                                name="arrow-left"
                                size={25}
                                color={'white'}
                            />
                        </TouchableOpacity>
                    </View>}

                containerStyle={{
                    backgroundColor: '#292B2D',
                    height: 112,
                    borderBottomColor: '#292B2D'

                }}

            />
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>การออกกำลังกาย</Text>

                            <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={styles.modalText}>จำนวนครั้ง</Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <TextInput
                                        label="Email"
                                        value={text}
                                        keyboardType='numeric'
                                        style={{
                                            borderRadius: 5,
                                            borderWidth: 1,
                                            borderColor: '#3D3D3D',
                                            width: 70,
                                            height: 35
                                        }}
                                        onChangeText={text => setText(text)}
                                    />

                                </View>
                            </View>

                            <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={styles.modalText}>จำนวนครั้ง</Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <TextInput
                                        label="Email"
                                        value={text}
                                        keyboardType='numeric'
                                        style={{
                                            borderRadius: 5,
                                            borderWidth: 1,
                                            borderColor: '#3D3D3D',
                                            width: 70,
                                            height: 35,
                                        }}
                                        onChangeText={text => setText(text)}
                                    />

                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '70%',justifyContent:'space-around' }}>



                                <TouchableOpacity
                                    style={{ backgroundColor: '#292B2D', width: 80, height: 45, justifyContent: 'center', alignItems: 'center', borderRadius: 6, }}
                                    title={"Go to the hell"}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>ยกเลิก</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ backgroundColor: '#69BD51', width: 80, height: 45, justifyContent: 'center', alignItems: 'center', borderRadius: 6, }}
                                    title={"Go to the hell"}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>เข้าสู่ระบบ</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

            </View>


            <View style={styles.container}>

                <ScrollView>
                    <View style={{ width: '90%', height: 1000, alignItems: 'center', }} >



                        <View style={{ width: "95%", height: 300, alignItems: 'center', paddingRight: '5%', paddingLeft: '5%', backgroundColor: '#292B2D', marginTop: '0%', borderRadius: 10 }}>
                            <Image
                                style={{ width: 420, height: '100%' }}
                                source={{ uri: imageUrls }}
                            />
                        </View>

                        <View style={{ width: "95%", height: 90, alignItems: 'center', paddingRight: '5%', paddingLeft: '5%', backgroundColor: '#292B2D', marginTop: '2%', borderRadius: 10 }}>
                            <View style={{ marginTop: 10, justifyContent: 'flex-start', width: '100%' }}>
                                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', justifyContent: 'flex-start' }}> {JSON.stringify(name)}</Text>
                            </View>
                            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ color: 'white', fontSize: 14 }}>จำนวน</Text>
                                    <Text style={{ color: '#69BD51', fontSize: 14 }}> {JSON.stringify(volume)}</Text>
                                </View>
                                <View style={{ alignItems: 'center', paddingLeft: '10%' }}>
                                    <Text style={{ color: 'white', fontSize: 14 }}>รอบ</Text>
                                    <Text style={{ color: '#69BD51', fontSize: 14 }}> {JSON.stringify(round)}</Text>
                                </View>
                                <View style={{ alignItems: 'center', paddingLeft: '10%' }}>
                                    <Text style={{ color: 'white', fontSize: 14 }}>น้ำหนัก</Text>
                                    <Text style={{ color: '#69BD51', fontSize: 14 }}> {JSON.stringify(weight)}</Text>
                                </View>
                                <View style={{ alignItems: 'center', paddingLeft: '10%' }}>
                                    <Text style={{ color: 'white', fontSize: 14 }}>เวลาพัก</Text>
                                    <Text style={{ color: '#69BD51', fontSize: 14 }}> {JSON.stringify(breaks)}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ width: "95%", height: '20%', paddingRight: '5%', paddingLeft: '5%', backgroundColor: '#292B2D', marginTop: '2%', flexDirection: 'row', borderRadius: 10 }}>
                            <View style={{ width: '30%', alignItems: 'center', padding: '5%' }}>
                                <Text style={{ color: 'white', fontSize: 14, weight: '100%' }}>อุปกรณ์</Text>
                                <Text style={{ color: '#ffffff', fontSize: 14, height: '100%' }}> {JSON.stringify(equipment)}</Text>
                            </View>
                            <View style={{ width: '80%', alignItems: 'center', margin: '3%' }}>

                                <Image
                                    style={{ width: 180, height: 160 }}
                                    source={{ uri: Imageequipment }}
                                />
                            </View>


                        </View>


                        <View style={{ width: '95%', alignItems: 'flex-start', margin: '2%', backgroundColor: '#292B2D', padding: '4%', borderRadius: 10 }}>
                            <Text style={{ color: 'white', fontSize: 14, alignItems: 'flex-start', }}>คำอธิบาย</Text>
                            <Text style={{ color: '#ffffff', fontSize: 14, }}> {JSON.stringify(description)}</Text>

                        </View>

                        <View style={{ width: '100%', alignItems: 'center', paddingTop: '10%' }}>
                            <Pressable
                                style={[styles.button, styles.buttonOpen]}
                                onPress={() => setModalVisible(true)}
                            >
                                <Text style={styles.textStyle}>เสร็จสิ้น</Text>
                            </Pressable>
                        </View>

                    </View>

                </ScrollView>


            </View>






        </>
    );
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flexDirection: "column",
        paddingBottom: 0,
        backgroundColor: '#3D3D3D',
        alignItems: 'center'


    },
    lastcontainer: {
        height: '100%',
        flexDirection: "column",
        paddingBottom: 30
    },
    image: {
        height: '100%',
        resizeMode: "cover",
        justifyContent: "flex-end",
        height: 400,


    },
    text: {
        color: "black",
        fontSize: 18,
        fontWeight: "bold",
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingBottom: 15,
        paddingTop: 15,
        // backgroundColor: "#000000a0"
    },
    detailtext: {
        color: "black",
        fontSize: 16,
        fontWeight: "normal",
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingBottom: 15,
        paddingTop: 15,
        // backgroundColor: "#000000a0"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 0
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#69BD51",
        width: '70%',

    },
    buttonClose: {
        backgroundColor: "#292B2D",
        marginTop: 30
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 18,
        fontWeight: 'normal',
        color: '#3D3D3D',
        paddingTop: 5
    }
});
