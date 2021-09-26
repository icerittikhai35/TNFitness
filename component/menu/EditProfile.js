import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ScrollView, Flatlist, TextInput, } from 'react-native';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";
import { Header, Tile } from 'react-native-elements';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Picker } from '@react-native-community/picker';
import UploadImage from './updateImage';




export default function EditProfile({ navigation }) {
   
    //โชว์ข้อมูล
    const [infouser, setUser] = useState();
    const [userdata, setUserdata] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        AsyncStorage.getItem('id')
            .then((value) => {
                setUser(value);
                axios.get('http://34.126.141.128/profile_user.php', {
                    params: {
                        id: infouser
                    }
                })
                    .then(response => {
                        setUserdata(response.data);
                        setLoading(true)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
    }, [loading])

    //อัพเดตข้อมูล
    const [iduser, setIduser] = useState();
    const [email, setEmail] = useState();
    const [gender, setGender] = useState(1);
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [target, setTarget] = useState();
    const [experience, setExperience] = useState();



    let [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        const authenticate = async () => {
            axios
                .post("http://34.126.141.128/editprofile.php",
                    JSON.stringify({
                        iduser: iduser,
                        email: email,
                        gender: gender,
                        weight: weight,
                        height: height,
                        target: target,
                        experience: experience
                    })
                )
                .then((response) => {
                    if (response.data == "ok") {
                        navigation.navigate("Profile");
                        setIsSubmit(false)
                    } else {
                        alert(JSON.stringify(response.data));
                        setIsSubmit(false)
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        if (isSubmit) authenticate();
    }, [isSubmit]);

    useEffect(() => {
        AsyncStorage.getItem('id')
            .then((value) => {
                setIduser(value);

            })
    }, [iduser])




    return (

        console.log(userdata),
        <>
            <Header
                placement="center"
                leftComponent={
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Profile') }}>
                        <Icon
                            name="arrowleft"
                            size={25}
                            color={'white'}
                        />
                    </TouchableOpacity>
                }
                rightComponent={
                    <TouchableOpacity
                        // onPress={logout}
                        onPress={() => setIsSubmit(true)}
                    >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
                            บันทึก
                        </Text>
                    </TouchableOpacity>
                }
                containerStyle={{
                    backgroundColor: '#292B2D',
                    height: 112,
                    margin: 0,
                    borderBottomColor: '#292B2D',
                    paddingLeft: '5%',
                    paddingRight: '5%'

                }}
            />

            <View style={styles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >

                    <FlatList
                        style={{ width: '100%', backgroundColor: 'white', height: '100%', }}
                        data={userdata}
                        renderItem={({ item }) => (

                            <View style={{ alignItems: 'center', height: '100%', width: '100%' }}>
                                <Text
                                    style={{
                                        alignItems: 'flex-start',
                                        marginTop: 20,
                                        width: '100%',
                                        marginBottom: 20,
                                        paddingLeft: '5%',
                                        fontWeight: 'bold',
                                        fontSize: 25, color: '#696969'
                                    }}>
                                    แก้ไขข้อมูล
                                </Text>
                                <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#DCDCDC', height: 200, width: '100%', flexDirection: 'column' }}>
                                    <UploadImage />

                                </View>
                                <View style={{ marginTop: 5, alignItems: 'center', width: '100%' }}>
                                    <Text style={styles.name}>{gender}</Text>

                                    <View style={{ marginTop: 0, alignItems: 'center', margin: '3%', width: '100%', flexDirection: 'row', justifyContent: 'center', }}>
                                        <Text style={{ width: '25%', fontSize: 16, paddingTop: 0, paddingRight: '1%' }}>
                                            อีเมล์
                                        </Text>

                                        <TextInput
                                            style={{ width: '45%', height: 30, paddingLeft: 10, paddingTop: 0, borderBottomWidth: 1, borderRadius: 5, borderColor: '#AEAEAE', backgroundColor: 'white' }}
                                            onChangeText={(text) => setEmail(text)}
                                            multiline={false}
                                            placeholder={item.email}
                                        />
                                    </View>

                                    <View style={{ marginTop: 0, alignItems: 'center', margin: '3%', width: '100%', flexDirection: 'row', justifyContent: 'center', }}>
                                        <Text style={{ width: '25%', fontSize: 16, paddingTop: 0, paddingRight: '1%' }}>
                                            เพศ
                                        </Text>
                                        <View
                                            style={{
                                                width: '45%',
                                                backgroundColor: '#ffffff',
                                                borderRadius: 7, alignItems: 'center',
                                                justifyContent: 'center',
                                                borderColor: '#AEAEAE',
                                                borderWidth: 1,
                                                height: 40,
                                            }}>
                                            
                                            <Picker
                                                style={{
                                                    width: '100%',
                                                    borderRadius: 50, alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                                selectedValue={gender}
                                                enabled={true}
                                                onValueChange={(itemValue) => setGender(itemValue)}
                                            >
                                                <Picker.Item label="ชาย" value="1"></Picker.Item>
                                                <Picker.Item label="หญิง" value="2"></Picker.Item>
                                            </Picker>
                                            <Text>
                                                {gender}
                                            </Text>
                                        </View>
                                    </View>



                                    <View style={{ marginTop: 0, alignItems: 'center', margin: '3%', width: '100%', flexDirection: 'row', justifyContent: 'center', }}>
                                        <Text style={{ width: '25%', fontSize: 16, paddingTop: 0, paddingRight: '1%' }}>
                                            น้ำหนัก
                                        </Text>
                                        <TextInput
                                            style={{ width: '38%', height: 30, paddingLeft: 10, paddingTop: 0, borderBottomWidth: 1, borderRadius: 5, borderColor: '#AEAEAE', backgroundColor: 'white' }}
                                            onChangeText={(text) => setWeight(text)}
                                            multiline={false}
                                            placeholder={item.weight}
                                            keyboardType='numeric'
                                        />
                                        <Text style={{ width: '8%', fontSize: 16, paddingTop: 0 }}>
                                            กก.
                                        </Text>
                                    </View>

                                    <View style={{ marginTop: 0, alignItems: 'center', margin: '3%', width: '100%', flexDirection: 'row', justifyContent: 'center', }}>
                                        <Text style={{ width: '25%', fontSize: 16, paddingTop: 0, paddingRight: '1%' }}>
                                            ส่วนสูง
                                        </Text>
                                        <TextInput
                                            style={{ width: '38%', height: 30, paddingLeft: 10, paddingTop: 0, borderBottomWidth: 1, borderRadius: 5, borderColor: '#AEAEAE', backgroundColor: 'white' }}
                                            onChangeText={(text) => setHeight(text)}
                                            multiline={false}
                                            placeholder={item.height}
                                            keyboardType='numeric'
                                        />
                                        <Text style={{ width: '8%', fontSize: 16, paddingTop: 0 }}>
                                            ซม.
                                        </Text>
                                    </View>

                                    <View style={{ marginTop: 0, alignItems: 'center', margin: '3%', width: '100%', flexDirection: 'row', justifyContent: 'center', }}>
                                        <Text style={{ width: '25%', fontSize: 16, paddingTop: 0, paddingRight: '1%' }}>
                                            เป้าหมาย
                                        </Text>
                                        <View
                                            style={{
                                                width: '48%',
                                                backgroundColor: '#ffffff',
                                                borderRadius: 7, alignItems: 'center',
                                                justifyContent: 'center',
                                                borderColor: '#AEAEAE',
                                                borderWidth: 1,
                                                height: 40,
                                            }}>
                                            <Picker
                                                style={{
                                                    width: '100%',

                                                    borderRadius: 50, alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                                selectedValue={target}
                                                enabled={true}
                                                onValueChange={(itemValue) => setTarget(itemValue)}

                                            >
                                                <Picker.Item label="ลดไขมัน" value="1"></Picker.Item>
                                                <Picker.Item label="สร้างกล้ามเนื้อ " value="2"></Picker.Item>
                                                <Picker.Item label="เพื่อสุขภาพ" value="3"></Picker.Item>
                                            </Picker>
                                        </View>
                                    </View>

                                    <View style={{ marginTop: 0, alignItems: 'center', margin: '3%', width: '100%', flexDirection: 'row', justifyContent: 'center', }}>
                                        <Text style={{ width: '25%', fontSize: 16, paddingTop: 0, paddingRight: '1%' }}>
                                            ประสบการณ์
                                        </Text>
                                        <View
                                            style={{
                                                width: '48%',
                                                backgroundColor: '#ffffff',
                                                borderRadius: 7, alignItems: 'center',
                                                justifyContent: 'center',
                                                borderColor: '#AEAEAE',
                                                borderWidth: 1,
                                                height: 40,

                                            }}>
                                            <Picker
                                                style={{
                                                    width: '100%',
                                                    borderRadius: 50, alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                                enabled={true}
                                                selectedValue={experience}
                                                onValueChange={(itemValue) => setExperience(itemValue)}
                                            >
                                                <Picker.Item label="มือใหม่" value="1"></Picker.Item>
                                                <Picker.Item label="ปานกลาง " value="2"></Picker.Item>
                                                <Picker.Item label="ประสบการณ์สูง" value="3"></Picker.Item>
                                            </Picker>
                                        </View>
                                    </View>


                                </View>

                            </View>
                        )}
                    />


                </ScrollView>
            </View >
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: "#3D3D3D",
        height: 100,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 6,
        borderColor: "#ffffff",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 15
    },
    body: {
        marginTop: 20,
        marginBottom: 150,
        alignItems: 'center',
        height: '100%'
    },
    bodyContent: {
        width: '100%',
        alignItems: 'center',
        paddingTop: 20,
        height: '90%',


    },
    bodyContentIn: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingTop: '0%',
        paddingBottom: 0,
        justifyContent: 'space-around',
        flexDirection: 'column',




    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10

    },
    info: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center',
        justifyContent: 'space-around'
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