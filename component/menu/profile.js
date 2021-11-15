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
    const [infohistory, setInfohistory] = useState([]);
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

    useEffect(() => {
        AsyncStorage.getItem('id')
            .then((value) => {
                setUser(value);
                axios.get('http://34.126.141.128/history.php', {
                    params: {
                        id: infouser
                    }
                })
                    .then(response => {
                        setInfohistory(response.data);
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
    }, infohistory)





    const data = {
        labels: ["January", "February", "March", "April", "May", "March", "April", "May"],
        datasets: [
            {
                data: [1, 2, 3, 4, 5, 6, 7, 8],
                color: (opacity = 1) => `rgba(105, 189, 81, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["สถิติการออกกำลังกาย"] // optional
    };

    const chartConfig = {
        backgroundGradientFrom: "#ffffff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 1,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 1,
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


                <View style={{ marginBottom: '10%' }}>
                    <FlatList

                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        style={{ width: '100%', height: '100%', marginBottom: '10%' }}
                        data={userdata}
                        renderItem={({ item }) => (
                            <>
                                <View style={{ alignItems: 'center', width: '100%' }}>
                                    <View style={{ alignItems: 'center', backgroundColor: '#292B2D', height: 100, width: '100%' }}>
                                        <Image style={styles.avatar} source={{ uri: item.url }} />
                                    </View>
                                    <View style={{ marginTop: 100, alignItems: 'center' }}>
                                        <Text style={styles.name}>{item.username}</Text>
                                    </View>
                                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', }}>
                                        <Text style={styles.description}>เพศ: {(() => {
                                            if (item.gender == 1) {
                                                return (
                                                    <Text>ชาย     </Text>
                                                )
                                            } else {
                                                return (
                                                    <Text>หญิง     </Text>
                                                )
                                            }
                                        })()}</Text>
                                        <Text style={styles.description}>อายุ: {item.old} ปี</Text>

                                    </View>
                                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', }}>

                                        <Text style={styles.description}>ส่วนสูง: {item.height} ซม.   </Text>
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

                                    </View>
                                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>

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
                                        <Text style={{ color: 'white', }}>แก้ไขข้อมูลส่วนตัว</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: '100%', height: '100%', alignItems: 'center', backgroundColor: '#393B3D', paddingTop: 10, marginBottom: '20%' }} >

                                    <Text style={{ color: '#ffffff', fontSize: 20, marginBottom: 10, fontWeight: 'bold' }}>ประวัติการออกกำลังกายล่าสุด</Text>
                                    <View>
                                        <View>
                                            <View style={{ flexDirection: 'column' }}>
                                                <View style={{ flexDirection: 'row', borderColor: 'gray', borderBottomWidth: 1, }}>
                                                    <View style={{ margin: 3, width: 150, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                                                        <Text style={{ fontSize: 16, color: 'white' }}>ชื่อท่า</Text>
                                                    </View>
                                                   
                                                    <View style={{ margin: 3, width: 100, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                                                        <Text style={{ fontSize: 16, color: 'white' }}>จำนวนครั้ง</Text>
                                                    </View>
                                                    <View style={{ margin: 3, width: 100, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                                                        <Text style={{ fontSize: 16, color: 'white' }}>วันที่</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <FlatList
                                                showsVerticalScrollIndicator={false}
                                                keyExtractor={item => item.id}
                                                style={{ width: '100%', height: '100%', marginBottom: '10%' }}
                                                data={infohistory}
                                                renderItem={({ item }) => (
                                                    <View style={{ flexDirection: 'column' }}>
                                                        <View style={{ flexDirection: 'row', borderColor: 'gray', borderBottomWidth: 1, }}>
                                                            <View style={{ margin: 3, width: 150, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                                                                <Text style={{ fontSize: 14, color: 'white' }}>
                                                                    {(() => {
                                                                        if (item.idexercise == 1) {
                                                                            return (
                                                                                <Text>Deadlift</Text>
                                                                            )
                                                                        } else if (item.idexercise == 2) {
                                                                            return (
                                                                                <Text>Dumbbell Row</Text>
                                                                            )
                                                                        } else if (item.idexercise == 3) {
                                                                            return (
                                                                                <Text>Back Extension</Text>
                                                                            )
                                                                        } else if (item.idexercise == 4) {
                                                                            return (
                                                                                <Text>Dumbbell Upright Row</Text>
                                                                            )
                                                                        } else if (item.idexercise == 5) {
                                                                            return (
                                                                                <Text>T-Bar Row</Text>
                                                                            )
                                                                        } else if (item.idexercise == 6) {
                                                                            return (
                                                                                <Text>Lat Pulldown</Text>
                                                                            )
                                                                        } else if (item.idexercise == 7) {
                                                                            return (
                                                                                <Text>Seated cable row</Text>
                                                                            )
                                                                        } else if (item.idexercise == 8) {
                                                                            return (
                                                                                <Text>Decline Cable Flyes</Text>
                                                                            )
                                                                        } else if (item.idexercise == 9) {
                                                                            return (
                                                                                <Text>Bench Press</Text>
                                                                            )
                                                                        } else if (item.idexercise == 10) {
                                                                            return (
                                                                                <Text>Incline Dumbbell Bench Press</Text>
                                                                            )
                                                                        } else if (item.idexercise == 11) {
                                                                            return (
                                                                                <Text>Pec Deck</Text>
                                                                            )
                                                                        } else if (item.idexercise == 12) {
                                                                            return (
                                                                                <Text>Squat</Text>
                                                                            )
                                                                        } else if (item.idexercise == 13) {
                                                                            return (
                                                                                <Text>Leg Press</Text>
                                                                            )
                                                                        } else if (item.idexercise == 14) {
                                                                            return (
                                                                                <Text>Leg extension</Text>
                                                                            )
                                                                        } else if (item.idexercise == 15) {
                                                                            return (
                                                                                <Text>Lying Leg Curl</Text>
                                                                            )
                                                                        } else if (item.idexercise == 16) {
                                                                            return (
                                                                                <Text>Barbell Standing Calf Raise</Text>
                                                                            )
                                                                        } else if (item.idexercise == 17) {
                                                                            return (
                                                                                <Text>Push Press</Text>
                                                                            )
                                                                        } else if (item.idexercise == 18) {
                                                                            return (
                                                                                <Text>Dumbbell Lateral Raise</Text>
                                                                            )
                                                                        } else if (item.idexercise == 19) {
                                                                            return (
                                                                                <Text>Seated Dumbbell Shoulder Press</Text>
                                                                            )
                                                                        } else if (item.idexercise == 20) {
                                                                            return (
                                                                                <Text>Cable Rear Delt Fly</Text>
                                                                            )
                                                                        } else if (item.idexercise == 22) {
                                                                            return (
                                                                                <Text>Preacher Curls</Text>
                                                                            )
                                                                        } else if (item.idexercise == 23) {
                                                                            return (
                                                                                <Text>Lying Triceps Extensions</Text>
                                                                            )
                                                                        } else {
                                                                            return (
                                                                                <Text>Pushdowns</Text>
                                                                            )
                                                                        }
                                                                    })()}
                                                                </Text>
                                                            </View>


                                                           
                                                            <View style={{ margin: 3, width: 100, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                                                                <Text style={{ fontSize: 16, color: 'white' }}>{item.roundvolume}</Text>
                                                            </View>
                                                            <View style={{ margin: 3, width: 100, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                                                                <Text style={{ fontSize: 16, color: 'white' }}>{item.date}</Text>
                                                            </View>
                                                        </View>
                                                    </View>

                                                )}
                                            />

                                        </View>
                                    </View>


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