import React, { useState, useEffect } from 'react';
import { ImageBackground, Text, ScrollView, View, TouchableOpacity, StyleSheet, Button, FlatList } from 'react-native';
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
    const { imageUrls } = route.params;
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






            <View style={styles.container}>
                <View style={{ width: '100%', height: 300, alignItems: 'center', backgroundColor: 'red' }} >



                    <Image
                        style={{ width: 420, height: '100%' }}
                        source={{
                            uri: 'https://evofitness.at/wp-content/uploads/2019/03/EVO_Banner_March_14-1200x675.jpg'
                        }}
                    />
                    <View style={{ width: "95%", height: 90, alignItems: 'center', paddingRight: '5%', paddingLeft: '5%', backgroundColor: '#292B2D', marginTop: '2%' }}>
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

                    <View style={{ width: "95%", height: '40%', alignItems: 'flex-start', paddingRight: '5%', paddingLeft: '5%', backgroundColor: '#292B2D', marginTop: '2%' }}>

                       
                            <Text style={{ color: 'white', fontSize: 14 ,alignItems:'flex-start',weight:'100%'}}>เวลาพัก</Text>
                            <Text style={{ color: '#ffffff', fontSize: 14 ,height:'100%'}}> {JSON.stringify(description)}</Text>
                        



                    </View>

                </View>
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
    }
});
