import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ScrollView, Flatlist, TextInput, } from 'react-native';
import { Header, Tile } from 'react-native-elements';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Picker } from '@react-native-community/picker';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';




export default function EditProfile({ navigation }) {

    //โชว์ข้อมูล
    const [infouser, setUser] = useState();
    const [userdata, setUserdata] = useState([]);
    const [loading, setLoading] = useState(false);
    //อัพเดตข้อมูล
    const [iduser, setIduser] = useState();
    const [email, setEmail] = useState();
    const [gender, setGender] = useState();
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [target, setTarget] = useState();
    const [experience, setExperience] = useState();
    const [url, setImage] = useState();
   

    useEffect(() => {
        AsyncStorage.getItem('id')
            .then((value) => {
                setIduser(value);

            })
    })

    useEffect(() => {
        axios.get('http://34.126.141.128/profile_user.php', {
            params: {
                id: iduser
            }
        })
            .then(response => {
                setUserdata(response.data.all);
                setEmail(response.data.email)
                setGender(response.data.gender)
                setWeight(response.data.weight)
                setHeight(response.data.height)
                setTarget(response.data.target)
                setExperience(response.data.experience)
                setImage(response.data.url)
                setLoading(true)
            })
            .catch(err => {
                console.log(err)
            })

    }, [iduser])



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
                        experience: experience,
                        url: url,
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

    //อัพรูป
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        const base64 = await FileSystem.readAsStringAsync(result.uri, { encoding: 'base64' });
        console.log(base64);
        const base = 'data:image/jpeg;base64,'
        if (!result.cancelled) {
            setImage(base + base64);
        }
    };



    return (

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
                                    <View style={styles.containerImage}>
                                        {
                                            url && <Image source={{ uri: url }} style={{ width: 200, height: 200 }} />
                                        }

                                        <View style={styles.uploadBtnContainer}>
                                            <TouchableOpacity onPress={pickImage} style={styles.uploadBtn} >
                                                <Text>{url ? 'Edit' : 'Upload'} Image</Text>
                                                <AntDesign name="camera" size={20} color="black" />
                                            </TouchableOpacity>
                                        </View>


                                    </View>

                                </View>
                                <View style={{ marginTop: 5, alignItems: 'center', width: '100%' }}>
                                    <Text style={styles.name}>{email}</Text>

                                    <View style={{ marginTop: 0, alignItems: 'center', margin: '3%', width: '100%', flexDirection: 'row', justifyContent: 'center', }}>
                                        <Text style={{ width: '25%', fontSize: 16, paddingTop: 0, paddingRight: '1%' }}>
                                            อีเมล์
                                        </Text>

                                        <TextInput
                                            style={{ width: '45%', height: 30, paddingLeft: 10, paddingTop: 0, borderBottomWidth: 1, borderRadius: 5, borderColor: '#AEAEAE', backgroundColor: 'white' }}
                                            onChangeText={(text) => setEmail(text)}
                                            multiline={false}
                                            value={email}
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
                                            value={weight}
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
                                            value={height}
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
    uploadBtnContainer: {
        opacity: 0.7,
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: 'lightgrey',
        width: '100%',
        height: '25%',
    },
    uploadBtn: {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center'
    },
    containerImage: {
        elevation: 2,
        height: 180,
        width: 180,
        backgroundColor: '#efefef',
        position: 'relative',
        borderRadius: 999,
        overflow: 'hidden',
    },
});