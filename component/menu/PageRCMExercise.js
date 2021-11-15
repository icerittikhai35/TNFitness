import React, { useState, useEffect } from 'react';
import { TextInput, Text, ScrollView, View, TouchableOpacity, StyleSheet, Button, FlatList, Alert, Modal, Pressable, Dimensions, Animated } from 'react-native';
import { ListItem, Header, Image, Tile } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

import axios from 'axios';
import { SliderBox } from 'react-native-image-slider-box';
import { ExerciseBack, } from '../../DataExercise';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get("window");
const { height } = width * 100 / 60;

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
    const { id_exersice } = route.params;
    const { day } = route.params;
    const scrollX = new Animated.Value(0);
    const position = Animated.divide(scrollX, width);



    const [modalVisible, setModalVisible] = useState(false);
    const [modalround, setModalround] = useState(false);
    const [albumtraining, setAlbumtraining] = useState([]);
    const [text, setText] = React.useState('');
    const [count, setCount] = React.useState();
    const [roundone, setRoundone] = React.useState();
    const [roundtwo, setRoundtwo] = React.useState();
    const [roundthree, setRoundthree] = React.useState();
    const [roundfour, setRoundfour] = React.useState();
    const [roundfive, setRounfive] = React.useState();
    const [roundsix, setRoundsix] = React.useState();
    const [id, setId] = React.useState();
    const [status, setStatus] = React.useState();
    const [submit, setSubmit] = React.useState(false);


    useEffect(() => {
        const getid = async () => {
            try {
                const res = await AsyncStorage.getItem('id');
                setId(res);
            } catch (err) {
                console.log(err)
            }
        }
        getid();
    });

    useEffect(() => {
        setCount(round);
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://34.126.141.128/showalbumtraining.php', {
                    params: {
                        id: id_exersice
                    }
                });
                setAlbumtraining(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [albumtraining]);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://34.126.141.128/button_status.php', {
                    params: {
                        id_exersice: id_exersice,
                        u_id: id,
                        date: day,

                    }
                });
                setStatus(res.data.status);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    });

  

    useEffect(() => {
        const Insertcount = async () => {
            try {
                const res = await axios.post('http://34.126.141.128/insertcount.php', {
                    roundone: roundone,
                    roundtwo: roundtwo,
                    roundthree: roundthree,
                    roundfour: roundfour,
                    roundfive: roundfive,
                    roundsix: roundsix,
                    iduser: id,
                    idexercise: id_exersice,
                    round: count,
                    date: day
                });
                alert(res.data);
                setRoundone("");
                setRoundtwo("");
                setRoundthree("");
                setRoundfour("");
                setRounfive("");
                setRoundsix("");
                setSubmit(false);

            } catch (err) {
                alert(err);
                setSubmit(false);
            }
        }
        if (submit) Insertcount();
    }, [submit]);


    useEffect(() => {
        if (count > 6) {
            alert('กรอกไม่เกิน 6');
            setCount(round);
            
        }
    })

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
                                    <Text style={styles.modalText}>จำนวนรอบ</Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <TextInput
                                        keyboardType={"numeric"}
                                        textAlign={'center'}
                                        value={count}
                                        maxLength={6}
                                        style={{
                                            borderRadius: 5,
                                            borderWidth: 1,
                                            borderColor: '#3D3D3D',
                                            width: 70,
                                            height: 35
                                        }}
                                        onChangeText={(text) => setCount(text)}
                                    />

                                </View>
                            </View>



                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '70%', justifyContent: 'space-around' }}>



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
                                    onPress={() => { setModalVisible(!modalVisible); setModalround(true) }}
                                >
                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>ต่อไป</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>



                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalround}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalround(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>กรอกค่าการออก</Text>



                            {(() => {
                                if (count == 1) {
                                    return (
                                        <>
                                            <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View style={{ alignItems: 'center' }}>
                                                    <Text style={styles.modalText}>จำนวนครั้งที 1 </Text>
                                                </View>
                                                <View style={{ alignItems: 'center' }}>
                                                    <TextInput
                                                        keyboardType={"numeric"}
                                                        textAlign={'center'}
                                                        value={roundone}
                                                        style={{
                                                            borderRadius: 5,
                                                            borderWidth: 1,
                                                            borderColor: '#3D3D3D',
                                                            width: 70,
                                                            height: 35
                                                        }}
                                                        onChangeText={(text) => setRoundone(text)}
                                                    />

                                                </View>
                                            </View>
                                        </>
                                    )

                                }
                                else if (count == 2) {
                                    return (
                                        <>
                                            <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>

                                                <View style={{ alignItems: 'center' }}>
                                                    <Text style={styles.modalText}>จำนวนครั้งที 1 </Text>
                                                </View>
                                                <View style={{ alignItems: 'center' }}>
                                                    <TextInput
                                                        keyboardType={"numeric"}
                                                        textAlign={'center'}
                                                        value={roundone}
                                                        style={{
                                                            borderRadius: 5,
                                                            borderWidth: 1,
                                                            borderColor: '#3D3D3D',
                                                            width: 70,
                                                            height: 35
                                                        }}
                                                        onChangeText={(text) => setRoundone(text)}
                                                    />

                                                </View>
                                            </View>
                                            <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View style={{ alignItems: 'center' }}>
                                                    <Text style={styles.modalText}>จำนวนครั้งที 2 </Text>
                                                </View>
                                                <View style={{ alignItems: 'center' }}>
                                                    <TextInput
                                                        keyboardType={"numeric"}
                                                        textAlign={'center'}
                                                        value={roundtwo}
                                                        style={{
                                                            borderRadius: 5,
                                                            borderWidth: 1,
                                                            borderColor: '#3D3D3D',
                                                            width: 70,
                                                            height: 35
                                                        }}
                                                        onChangeText={(text) => setRoundtwo(text)}
                                                    />

                                                </View>
                                            </View>
                                        </>

                                    )

                                }
                                else if (count == 3) {
                                    return (
                                        <>
                                            <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>

                                                <View style={{ alignItems: 'center' }}>
                                                    <Text style={styles.modalText}>จำนวนครั้งที 1 </Text>
                                                </View>
                                                <View style={{ alignItems: 'center' }}>
                                                    <TextInput
                                                        keyboardType={"numeric"}
                                                        textAlign={'center'}
                                                        value={roundone}
                                                        style={{
                                                            borderRadius: 5,
                                                            borderWidth: 1,
                                                            borderColor: '#3D3D3D',
                                                            width: 70,
                                                            height: 35
                                                        }}
                                                        onChangeText={(text) => setRoundone(text)}
                                                    />

                                                </View>
                                            </View>
                                            <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View style={{ alignItems: 'center' }}>
                                                    <Text style={styles.modalText}>จำนวนครั้งที 2 </Text>
                                                </View>
                                                <View style={{ alignItems: 'center' }}>
                                                    <TextInput
                                                        keyboardType={"numeric"}
                                                        textAlign={'center'}
                                                        value={roundtwo}
                                                        style={{
                                                            borderRadius: 5,
                                                            borderWidth: 1,
                                                            borderColor: '#3D3D3D',
                                                            width: 70,
                                                            height: 35
                                                        }}
                                                        onChangeText={(text) => setRoundtwo(text)}
                                                    />

                                                </View>
                                            </View>
                                            <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View style={{ alignItems: 'center' }}>
                                                    <Text style={styles.modalText}>จำนวนครั้งที 3 </Text>
                                                </View>
                                                <View style={{ alignItems: 'center' }}>
                                                    <TextInput
                                                        keyboardType={"numeric"}
                                                        textAlign={'center'}
                                                        value={roundthree}
                                                        style={{
                                                            borderRadius: 5,
                                                            borderWidth: 1,
                                                            borderColor: '#3D3D3D',
                                                            width: 70,
                                                            height: 35
                                                        }}
                                                        onChangeText={(text) => setRoundthree(text)}
                                                    />

                                                </View>
                                            </View>
                                        </>
                                    )

                                } else if (count == 4) {
                                    return (
                                        <>
                                            <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>

                                                <View style={{ alignItems: 'center' }}>
                                                    <Text style={styles.modalText}>จำนวนครั้งที 1 </Text>
                                                </View>
                                                <View style={{ alignItems: 'center' }}>
                                                    <TextInput
                                                        keyboardType={"numeric"}
                                                        textAlign={'center'}
                                                        value={roundone}
                                                        style={{
                                                            borderRadius: 5,
                                                            borderWidth: 1,
                                                            borderColor: '#3D3D3D',
                                                            width: 70,
                                                            height: 35
                                                        }}
                                                        onChangeText={(text) => setRoundone(text)}
                                                    />

                                                </View>
                                            </View>
                                            <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View style={{ alignItems: 'center' }}>
                                                    <Text style={styles.modalText}>จำนวนครั้งที 2 </Text>
                                                </View>
                                                <View style={{ alignItems: 'center' }}>
                                                    <TextInput
                                                        keyboardType={"numeric"}
                                                        textAlign={'center'}
                                                        value={roundtwo}
                                                        style={{
                                                            borderRadius: 5,
                                                            borderWidth: 1,
                                                            borderColor: '#3D3D3D',
                                                            width: 70,
                                                            height: 35
                                                        }}
                                                        onChangeText={(text) => setRoundtwo(text)}
                                                    />

                                                </View>
                                            </View>
                                            <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View style={{ alignItems: 'center' }}>
                                                    <Text style={styles.modalText}>จำนวนครั้งที 3 </Text>
                                                </View>
                                                <View style={{ alignItems: 'center' }}>
                                                    <TextInput
                                                        keyboardType={"numeric"}
                                                        textAlign={'center'}
                                                        value={roundthree}
                                                        style={{
                                                            borderRadius: 5,
                                                            borderWidth: 1,
                                                            borderColor: '#3D3D3D',
                                                            width: 70,
                                                            height: 35
                                                        }}
                                                        onChangeText={(text) => setRoundthree(text)}
                                                    />

                                                </View>
                                            </View>
                                            <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View style={{ alignItems: 'center' }}>
                                                    <Text style={styles.modalText}>จำนวนครั้งที 4 </Text>
                                                </View>
                                                <View style={{ alignItems: 'center' }}>
                                                    <TextInput
                                                        keyboardType={"numeric"}
                                                        textAlign={'center'}
                                                        value={roundfour}
                                                        style={{
                                                            borderRadius: 5,
                                                            borderWidth: 1,
                                                            borderColor: '#3D3D3D',
                                                            width: 70,
                                                            height: 35
                                                        }}
                                                        onChangeText={(text) => setRoundfour(text)}
                                                    />

                                                </View>
                                            </View>
                                        </>
                                    )

                                } else if (count == 5) {
                                    return (
                                        <>
                                            <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>

                                                <View style={{ alignItems: 'center' }}>
                                                    <Text style={styles.modalText}>จำนวนครั้งที 1 </Text>
                                                </View>
                                                <View style={{ alignItems: 'center' }}>
                                                    <TextInput
                                                        keyboardType={"numeric"}
                                                        textAlign={'center'}
                                                        value={roundone}
                                                        style={{
                                                            borderRadius: 5,
                                                            borderWidth: 1,
                                                            borderColor: '#3D3D3D',
                                                            width: 70,
                                                            height: 35
                                                        }}
                                                        onChangeText={(text) => setRoundone(text)}
                                                    />

                                                </View>
                                            </View>
                                            <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View style={{ alignItems: 'center' }}>
                                                    <Text style={styles.modalText}>จำนวนครั้งที 2 </Text>
                                                </View>
                                                <View style={{ alignItems: 'center' }}>
                                                    <TextInput
                                                        keyboardType={"numeric"}
                                                        textAlign={'center'}
                                                        value={roundtwo}
                                                        style={{
                                                            borderRadius: 5,
                                                            borderWidth: 1,
                                                            borderColor: '#3D3D3D',
                                                            width: 70,
                                                            height: 35
                                                        }}
                                                        onChangeText={(text) => setRoundtwo(text)}
                                                    />

                                                </View>
                                            </View>
                                            <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View style={{ alignItems: 'center' }}>
                                                    <Text style={styles.modalText}>จำนวนครั้งที 3 </Text>
                                                </View>
                                                <View style={{ alignItems: 'center' }}>
                                                    <TextInput
                                                        keyboardType={"numeric"}
                                                        textAlign={'center'}
                                                        value={roundthree}
                                                        style={{
                                                            borderRadius: 5,
                                                            borderWidth: 1,
                                                            borderColor: '#3D3D3D',
                                                            width: 70,
                                                            height: 35
                                                        }}
                                                        onChangeText={(text) => setRoundthree(text)}
                                                    />

                                                </View>
                                            </View>
                                            <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View style={{ alignItems: 'center' }}>
                                                    <Text style={styles.modalText}>จำนวนครั้งที 4 </Text>
                                                </View>
                                                <View style={{ alignItems: 'center' }}>
                                                    <TextInput
                                                        keyboardType={"numeric"}
                                                        textAlign={'center'}
                                                        value={roundfour}
                                                        style={{
                                                            borderRadius: 5,
                                                            borderWidth: 1,
                                                            borderColor: '#3D3D3D',
                                                            width: 70,
                                                            height: 35
                                                        }}
                                                        onChangeText={(text) => setRoundfour(text)}
                                                    />

                                                </View>
                                            </View>
                                            <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View style={{ alignItems: 'center' }}>
                                                    <Text style={styles.modalText}>จำนวนครั้งที 5 </Text>
                                                </View>
                                                <View style={{ alignItems: 'center' }}>
                                                    <TextInput
                                                        keyboardType={"numeric"}
                                                        textAlign={'center'}
                                                        value={roundfive}
                                                        style={{
                                                            borderRadius: 5,
                                                            borderWidth: 1,
                                                            borderColor: '#3D3D3D',
                                                            width: 70,
                                                            height: 35
                                                        }}
                                                        onChangeText={(text) => setRounfive(text)}
                                                    />

                                                </View>
                                            </View>
                                        </>
                                    )

                                }
                                else {
                                    return (
                                        <>
                                            <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>

                                                <View style={{ alignItems: 'center' }}>
                                                    <Text style={styles.modalText}>จำนวนครั้งที 1 </Text>
                                                </View>
                                                <View style={{ alignItems: 'center' }}>
                                                    <TextInput
                                                        keyboardType={"numeric"}
                                                        textAlign={'center'}
                                                        value={roundone}
                                                        style={{
                                                            borderRadius: 5,
                                                            borderWidth: 1,
                                                            borderColor: '#3D3D3D',
                                                            width: 70,
                                                            height: 35
                                                        }}
                                                        onChangeText={(text) => setRoundone(text)}
                                                    />

                                                </View>
                                            </View>
                                            <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View style={{ alignItems: 'center' }}>
                                                    <Text style={styles.modalText}>จำนวนครั้งที 2 </Text>
                                                </View>
                                                <View style={{ alignItems: 'center' }}>
                                                    <TextInput
                                                        keyboardType={"numeric"}
                                                        textAlign={'center'}
                                                        value={roundtwo}
                                                        style={{
                                                            borderRadius: 5,
                                                            borderWidth: 1,
                                                            borderColor: '#3D3D3D',
                                                            width: 70,
                                                            height: 35
                                                        }}
                                                        onChangeText={(text) => setRoundtwo(text)}
                                                    />

                                                </View>
                                            </View>
                                            <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View style={{ alignItems: 'center' }}>
                                                    <Text style={styles.modalText}>จำนวนครั้งที 3 </Text>
                                                </View>
                                                <View style={{ alignItems: 'center' }}>
                                                    <TextInput
                                                        keyboardType={"numeric"}
                                                        textAlign={'center'}
                                                        value={roundthree}
                                                        style={{
                                                            borderRadius: 5,
                                                            borderWidth: 1,
                                                            borderColor: '#3D3D3D',
                                                            width: 70,
                                                            height: 35
                                                        }}
                                                        onChangeText={(text) => setRoundthree(text)}
                                                    />

                                                </View>
                                            </View>
                                            <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View style={{ alignItems: 'center' }}>
                                                    <Text style={styles.modalText}>จำนวนครั้งที 4 </Text>
                                                </View>
                                                <View style={{ alignItems: 'center' }}>
                                                    <TextInput
                                                        keyboardType={"numeric"}
                                                        textAlign={'center'}
                                                        value={roundfour}
                                                        style={{
                                                            borderRadius: 5,
                                                            borderWidth: 1,
                                                            borderColor: '#3D3D3D',
                                                            width: 70,
                                                            height: 35
                                                        }}
                                                        onChangeText={(text) => setRoundfour(text)}
                                                    />

                                                </View>
                                            </View>
                                            <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View style={{ alignItems: 'center' }}>
                                                    <Text style={styles.modalText}>จำนวนครั้งที 5 </Text>
                                                </View>
                                                <View style={{ alignItems: 'center' }}>
                                                    <TextInput
                                                        keyboardType={"numeric"}
                                                        textAlign={'center'}
                                                        value={roundfive}
                                                        style={{
                                                            borderRadius: 5,
                                                            borderWidth: 1,
                                                            borderColor: '#3D3D3D',
                                                            width: 70,
                                                            height: 35
                                                        }}
                                                        onChangeText={(text) => setRounfive(text)}
                                                    />

                                                </View>
                                            </View>
                                            <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View style={{ alignItems: 'center' }}>
                                                    <Text style={styles.modalText}>จำนวนครั้งที 6 </Text>
                                                </View>
                                                <View style={{ alignItems: 'center' }}>
                                                    <TextInput
                                                        keyboardType={"numeric"}
                                                        textAlign={'center'}
                                                        value={roundsix}
                                                        style={{
                                                            borderRadius: 5,
                                                            borderWidth: 1,
                                                            borderColor: '#3D3D3D',
                                                            width: 70,
                                                            height: 35
                                                        }}
                                                        onChangeText={(text) => setRoundsix(text)}
                                                    />

                                                </View>
                                            </View>
                                        </>
                                    )
                                }
                            })()}




                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '70%', justifyContent: 'space-around' }}>
                                <TouchableOpacity
                                    style={{ backgroundColor: '#292B2D', width: 80, height: 45, justifyContent: 'center', alignItems: 'center', borderRadius: 6, }}
                                    title={"Go to the hell"}
                                    onPress={() => setModalround(!modalround)}
                                >
                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>ยกเลิก</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ backgroundColor: '#69BD51', width: 80, height: 45, justifyContent: 'center', alignItems: 'center', borderRadius: 6, }}
                                    title={"Go to the hell"}
                                    onPress={() => { setModalround(!modalround); setSubmit(true) }}
                                >
                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>บันทึก</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

            </View>


            <View style={styles.container}>

                <ScrollView style={{marginBottom:'10%'}}>
                    <View style={{ width: '100%', height: 1000, marginBottom: 5, alignItems: 'center' }} >

                        {albumtraining == null ? (
                            <>
                                <View style={{ width: '100%', height: 300, marginBottom: 0, backgroundColor: '#e5e5e5', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text>ยังไม่มีรูปภาพ???</Text>
                                </View>
                            </>
                        ) : (
                            <>
                                <View style={{ width: '90%', height: 300, marginBottom: 0, backgroundColor: '#e5e5e5', alignItems: 'center' }}>
                                    <ScrollView
                                        pagingEnabled
                                        showsHorizontalScrollIndicator={false}

                                        onScroll={Animated.event(
                                            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                                            { useNativeDriver: false }
                                        )}
                                        horizontal={true}
                                        style={{
                                            width,
                                            height
                                        }}>
                                        {albumtraining.map((item, i) => (
                                            <TouchableOpacity style={{ width, height }}>
                                                <Image
                                                    key={i}
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                    }}
                                                    source={{uri: item.album_training_img}}
                                                />
                                            </TouchableOpacity>
                                        ))}
                                    </ScrollView>



                                    <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center' }}>
                                        {albumtraining.map((i, k) => {
                                            let opacity = position.interpolate({
                                                inputRange: [k - 1, k, k + 1],
                                                outputRange: [0.3, 1.0, 0.3],
                                                extrapolate: 'clamp'
                                            })
                                            return (
                                                <Animated.View key={k} style={{ opacity, height: 10, width: 10, backgroundColor: 'white', borderRadius: 20, margin: 5 }} />
                                            )
                                        })}
                                    </View>
                                </View>
                            </>
                        )}


                        <View style={{ width: "95%", height: 90, alignItems: 'center', backgroundColor: '#292B2D', marginTop: '2%', borderRadius: 10 }}>
                            <View style={{ marginTop: 10, justifyContent: 'flex-start', width: '95%' }}>
                                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', justifyContent: 'flex-start' }}> {(name)}</Text>
                            </View>
                            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ color: 'white', fontSize: 14 }}>จำนวน</Text>
                                    <Text style={{ color: '#69BD51', fontSize: 14 }}> {(volume)} ครั้ง</Text>
                                </View>
                                <View style={{ alignItems: 'center', paddingLeft: '8%' }}>
                                    <Text style={{ color: 'white', fontSize: 14 }}>รอบ</Text>
                                    <Text style={{ color: '#69BD51', fontSize: 14 }}> {(round)} รอบ</Text>
                                </View>
                                <View style={{ alignItems: 'center', paddingLeft: '8%' }}>
                                    <Text style={{ color: 'white', fontSize: 14 }}>น้ำหนัก</Text>
                                    <Text style={{ color: '#69BD51', fontSize: 14 }}> {(weight)} กก.</Text>
                                </View>
                                <View style={{ alignItems: 'center', paddingLeft: '8%' }}>
                                    <Text style={{ color: 'white', fontSize: 14 }}>เวลาพัก</Text>
                                    <Text style={{ color: '#69BD51', fontSize: 14 }}> {JSON.stringify(breaks)} วินาที</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ width: "95%", height: '20%', paddingRight: '5%', paddingLeft: '5%', backgroundColor: '#292B2D', marginTop: '2%', flexDirection: 'row', borderRadius: 10 }}>
                            <View style={{ width: '30%', alignItems: 'center', padding: '5%' }}>
                                <Text style={{ color: 'white', fontSize: 14, weight: '100%' }}>อุปกรณ์</Text>
                                <Text style={{ color: '#ffffff', fontSize: 14, height: '100%' }}> {(equipment)}</Text>
                            </View>
                            <View style={{ width: '80%', alignItems: 'center', margin: '3%' }}>

                                <Image
                                    style={{ width: 200, height: 180,borderRadius:10 }}
                                    source={{ uri: Imageequipment }}
                                />
                            </View>


                        </View>


                        <View style={{ width: '95%', alignItems: 'flex-start', margin: '2%', backgroundColor: '#292B2D', padding: '4%', borderRadius: 10 }}>
                            <Text style={{ color: 'white', fontSize: 14, alignItems: 'flex-start', }}>คำอธิบาย</Text>
                            <Text style={{ color: '#ffffff', fontSize: 14, }}> {JSON.stringify(description)}</Text>

                        </View>

                        <View style={{ width: '100%', alignItems: 'center', paddingTop: '10%' }}>

                            {status == true ? (
                                <>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}

                                    >
                                        <Text style={styles.textStyle}>ฝึกเรียบร้อยแล้ว</Text>
                                    </Pressable>
                                </>
                            ) : (
                                <>
                                    <Pressable
                                        style={[styles.button, styles.buttonOpen]}
                                        onPress={() => setModalVisible(true)}
                                    >
                                        <Text style={styles.textStyle}>เสร็จสิ้น</Text>
                                    </Pressable>
                                </>
                            )}



                        </View>

                    </View>

                </ScrollView>


            </View>






        </>
    );
}
const styles = StyleSheet.create({
    container: {

        flexDirection: "column",
        paddingBottom: 0,
        backgroundColor: '#3D3D3D',



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
        backgroundColor: "#555555",
        width: '70%',
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
