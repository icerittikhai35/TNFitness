import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ScrollView, Flatlist } from 'react-native';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";
import { Header, Tile } from 'react-native-elements';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native';

const screenWidth = Dimensions.get("window").width;


export default function Profile({ navigation }) {

    const [infouser, setUser] = useState();
    const [userdata, setUserdata] = useState([]);
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
                        setUserdata(response.data.all);
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
    })

    const data = {
        labels: ["Swim", "Bike", "Run"], // optional
        data: [0.4, 0.6, 0.8]
    };

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };
      
    return (
       
        <>
            <Header
                placement="center"
                leftComponent={<Text style={{ color: 'white', marginLeft: '5%', marginTop: 0, fontSize: 16, fontWeight: 'bold' }}>โปรไฟล์</Text>}
                rightComponent={
                    <TouchableOpacity
                        // onPress={logout}
                        onPress={() => { navigation.navigate('Setting') }}
                    >
                        <Image
                            style={{ height: 20, width: 20, marginRight: '5%', marginTop: 0 }}
                            source={require('../../img/setting.png')}
                        />
                    </TouchableOpacity>
                }
                containerStyle={{
                    backgroundColor: '#292B2D',
                    height: 112,
                    margin: 0,
                    borderBottomColor: '#292B2D'
                }}
            />

            <View style={styles.container}>


                <View>
                    <FlatList

                        keyExtractor={item => item.id}
                        style={{ width: '100%', height: '100 %', }}
                        data={userdata}
                        renderItem={({ item }) => (
                            <>
                                <View style={{ alignItems: 'center', height: 400, width: '100%' }}>
                                    <View style={{ alignItems: 'center', backgroundColor: '#292B2D', height: 100, width: '100%' }}>
                                        <Image style={styles.avatar} source={{ uri: item.url }} />
                                    </View>
                                    <View style={{ marginTop: 100, alignItems: 'center' }}>
                                        <Text style={styles.name}>{item.username}</Text>
                                    </View>
                                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', }}>
                                        <Text style={styles.description}>เพศ: {(() => {
                                            if (item.gender == 1) {
                                                return (
                                                    <Text>ชาย</Text>
                                                )
                                            } else {
                                                return (
                                                    <Text>หญิง</Text>
                                                )
                                            }
                                        })()}</Text>
                                        <Text style={styles.description}>อายุ: {item.old} ปี</Text>
                                        <Text style={styles.description}>ส่วนสูง: {item.height} ซม.</Text>
                                        <Text style={styles.description}>น้ำหนัก: {item.weight} กก.</Text>
                                    </View>
                                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
                                        <Text style={styles.info}>เป้าหมาย : {(() => {
                                            if (item.target == 1) {
                                                return (
                                                    <Text>ลดไขมัน</Text>
                                                )
                                            } else if (item.target == 2) {
                                                return (
                                                    <Text>สร้างกล้ามเนื้อ</Text>
                                                )
                                            } else {
                                                return (
                                                    <Text>เพื่อสุขภาพ</Text>
                                                )
                                            }
                                        })()}
                                        </Text>
                                        <Text style={styles.info}>
                                            ประสบการณ์ : {(() => {
                                                if (item.experience == 1) {
                                                    return (
                                                        <Text>มือใหม่</Text>
                                                    )
                                                } else if (item.experience == 2) {
                                                    return (
                                                        <Text>ปานกลาง</Text>
                                                    )
                                                } else {
                                                    return (
                                                        <Text>ประสบการณ์สูง</Text>
                                                    )
                                                }
                                            })()}
                                        </Text>
                                    </View>

                                    <TouchableOpacity
                                        style={styles.buttonContainer}
                                        onPress={() => navigation.navigate('EditProfile')}
                                    >
                                        <Text style={{ color: 'white' }}>แก้ไขข้อมูลส่วนตัว</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: '100%', height: '70%', alignItems: 'center', backgroundColor: '#696969', paddingTop: 15 }} >

                                    <Text style={{ color: '#3D3D3D', fontSize: 20 }}>ภาพรวมการออกกำลังกาย</Text>
                                    <ProgressChart
                                        data={data}
                                        width={screenWidth}
                                        height={220}
                                        strokeWidth={16}
                                        radius={32}
                                        chartConfig={chartConfig}
                                        hideLegend={false}
                                    />
                                   

                                </View>
                            </>

                        )}

                    />






                </View >

            </View >
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        
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
        marginTop: 30,
        backgroundColor: '#3D3D3D'
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
        fontWeight: 'bold'
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