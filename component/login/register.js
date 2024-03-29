import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { Header, } from 'react-native-elements';
import { TextInput } from 'react-native-paper';

//npm install axios –save อย่าลืมติดตั้ง
import axios from 'axios';

export default function InsertInfo(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    
    let [isSubmit, setIsSubmit] = useState(false);


    useEffect(() => {
        const authenticate = async () => {
            axios
                .post(
                    "http://34.126.141.128/insert.php",
                    JSON.stringify({
                        username: username,
                        password: password,
                        email: email
                    })
                )
                .then((response) => {
                    if (response.data == "ok") {
                        props.navigation.navigate("Login");
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

    const usernameHandler = (text) => {
        setUsername(text);
    };

   

    return (
        <View style={{ height: '100%', backgroundColor: '#3D3D3D' }}>
            <Header
                placement="center"
                centerComponent={<Image
                    source={require('../../img/Since1992.png')}
                    style={{ width: 60, height: 60, }}
                />}
                containerStyle={{
                    backgroundColor: '#292B2D',
                    height: 112,
                    borderBottomColor: '#292B2D'
                }}
            />

            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#ffffff', paddingTop: '8%' }}>สมัครสมาชิก</Text>



                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: '8%' }}>
                    <TextInput label='อีเมล์'
                        style={{ width: '70%', height: 45, margin: '1%', borderWidth: 1, borderRadius: 5, }}
                        onChangeText={(text) => setEmail(text)}
                        keyboardType='email-address'
                        multiline={false}
                        theme={{
                            colors: {
                                primary: '#AEAEAE',
                                underlineColor: 'transparent',
                                margin: 10,
                                text: 'black'
                            }
                        }}
                    />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    <TextInput label='ชื่อผู้ใช้งาน'
                        style={{ width: '70%', height: 45, margin: '1%', borderWidth: 1, borderRadius: 5, }}
                        onChangeText={usernameHandler}
                        multiline={false}
                        theme={{
                            colors: {
                                primary: '#AEAEAE',
                                underlineColor: 'transparent',
                                margin: 10,
                                text: 'black'
                            }
                        }}
                    />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    <TextInput label='รหัสผ่าน'
                        style={{ width: '70%', height: 45, margin: '1%', borderWidth: 1, borderRadius: 5, }}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                        multiline={false}
                        theme={{
                            colors: {
                                primary: '#AEAEAE',
                                underlineColor: 'transparent',
                                margin: 10,
                                text: 'black'
                            }
                        }}
                    />
                </View>


                <View style={{ paddingTop: '60%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{ backgroundColor: '#69BD51', width: '70%', height: 45, justifyContent: 'center', alignItems: 'center', borderRadius: 6, }}
                        title={"Go to the hell"}
                        onPress={() => setIsSubmit(true)}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>สมัครสมาชิก</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>ต้องการเข้าสู่ระบบ ? </Text>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Login')}>
                        <Text style={{ color: '#69BD51', fontWeight: 'bold' }}>เข้าสู่ระบบ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({

});
