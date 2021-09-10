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
                        setUserdata(response.data);
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
    })


     
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
                            style={{ height: 25, width: 25, marginRight: '5%', marginTop: 0 }}
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
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.header}>

                    </View>
                    <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                    <View style={styles.body}>
                        <View style={styles.bodyContent}>
                            <FlatList
                                data={userdata}
                                renderItem={({ item }) => (
                                    <View style={styles.bodyContent}>
                                        <Text style={styles.name}>{item.username}</Text>
                                        <Text style={styles.info}>เป้าหมาย : ลดน้ำหนัก / ประสบการณ์ : มือใหม่</Text>
                                        <Text style={styles.description}>อายุ:20  ส่วนสูง:180  น้ำหนัก:70</Text>
                                        <TouchableOpacity
                                            style={styles.buttonContainer}
                                            onPress={() => navigation.navigate('EditProfile')}

                                        >
                                            <Text style={{ color: 'white' }}>แก้ไขข้อมูลส่วนตัว</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            />




                            <View style={{ width: '120%', height: '80%', alignItems: 'center', backgroundColor: '#ffffff', paddingTop: 15 }} >

                                <Text style={{ color: '#3D3D3D', fontSize: 20 }}>ภาพรวมการออกกำลังกาย</Text>
                                <LineChart
                                    data={{
                                        labels: ["January", "February", "March", "April", "May", "June"],
                                        datasets: [
                                            {
                                                data: [
                                                    Math.random() * 100,
                                                    Math.random() * 100,
                                                    Math.random() * 100,
                                                    Math.random() * 100,
                                                    Math.random() * 100,
                                                    Math.random() * 100
                                                ]
                                            }
                                        ]
                                    }}
                                    width={Dimensions.get("window").width} // from react-native
                                    height={220}
                                    yAxisLabel="$"
                                    yAxisSuffix="k"
                                    yAxisInterval={1} // optional, defaults to 1
                                    chartConfig={{
                                        backgroundColor: "#3D3D3D",
                                        backgroundGradientFrom: "#3D3D3D",
                                        backgroundGradientTo: "#3D3D3D",
                                        decimalPlaces: 2, // optional, defaults to 2dp
                                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                        style: {
                                            borderRadius: 16
                                        },
                                        propsForDots: {
                                            r: "6",
                                            strokeWidth: "2",
                                            stroke: "#69BD51"
                                        }
                                    }}
                                    bezier
                                    style={{
                                        marginVertical: 8,
                                        borderRadius: 7
                                    }}
                                />


                                <Text style={{ color: '#3D3D3D', fontSize: 20 }}>ภาพรวมการออกกำลังกาย</Text>
                                <LineChart
                                    data={{
                                        labels: ["January", "February", "March", "April", "May", "June"],
                                        datasets: [
                                            {
                                                data: [
                                                    Math.random() * 100,
                                                    Math.random() * 100,
                                                    Math.random() * 100,
                                                    Math.random() * 100,
                                                    Math.random() * 100,
                                                    Math.random() * 100
                                                ]
                                            }
                                        ]
                                    }}
                                    width={Dimensions.get("window").width} // from react-native
                                    height={220}
                                    yAxisLabel="$"
                                    yAxisSuffix="k"
                                    yAxisInterval={1} // optional, defaults to 1
                                    chartConfig={{
                                        backgroundColor: "#3D3D3D",
                                        backgroundGradientFrom: "#3D3D3D",
                                        backgroundGradientTo: "#3D3D3D",
                                        decimalPlaces: 2, // optional, defaults to 2dp
                                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                        style: {
                                            borderRadius: 16
                                        },
                                        propsForDots: {
                                            r: "6",
                                            strokeWidth: "2",
                                            stroke: "#69BD51"
                                        }
                                    }}
                                    bezier
                                    style={{
                                        marginVertical: 8,
                                        borderRadius: 7,
                                        marginBottom: 50
                                    }}
                                />

                            </View>

                        </View>

                    </View>
                </ScrollView>
            </View >
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    header: {
        backgroundColor: "#3D3D3D",
        height: 50,
        justifyContent: 'space-between',
        flexDirection: 'row'
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
        marginTop: 5
    },
    body: {
        marginTop: 20,
        marginBottom: 150,
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