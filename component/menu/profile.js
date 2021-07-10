import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ScrollView, } from 'react-native';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";
import { Header, Tile } from 'react-native-elements';
import axios from 'axios';


const screenWidth = Dimensions.get("window").width;



export default class Profile extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios.get("http://34.126.113.88/showdata.php")
            .then(response => {
                const users = response.data;
                this.setState({ users });
            })
    }

    render(props) {

        return (
            <>
                <Header
                    placement="center"
                    leftComponent={<Text style={{ color: 'white', marginLeft: '5%', marginTop: 0, fontSize: 16, fontWeight: 'bold' }}>โปรไฟล์</Text>}
                    rightComponent={
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting')}>
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
                               <Text style={ styles.name}>John Doe</Text>
                                {this.state.users.map(user =>
                                    <View style={{ width: 100, alignItems: 'center', }}>
                                        <Text style={{ fontSize: 18 }}>{user.username}</Text>
                                        <Image source={{ uri: user.img }}
                                            style={{ width: 150, height: 10 }} />
                                    </View>
                                )}
                                <Text style={styles.info}>เป้าหมาย : ลดน้ำหนัก / ประสบการณ์ : มือใหม่</Text>
                                <Text style={styles.description}>อายุ:20  ส่วนสูง:180  น้ำหนัก:70</Text>
                                <TouchableOpacity
                                    style={styles.buttonContainer}
                                    onPress={() => this.props.navigation.navigate('EditProfile')}

                                >
                                    <Text style={{ color: 'white' }}>แก้ไขข้อมูลส่วนตัว</Text>
                                </TouchableOpacity>

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
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
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