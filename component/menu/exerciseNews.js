import React, { useState } from 'react';
import { ImageBackground, Text, ScrollView, View, TouchableOpacity, StyleSheet, Button } from 'react-native';

import { ListItem, Header, Image, Tile } from 'react-native-elements';

import Icon from 'react-native-vector-icons/Feather';

const ExerciseNews = (props) => {
    return (
        <>

            <Header
                placement="center"
                leftComponent={
                    <View style={{ marginTop: 0, alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => { props.navigation.navigate('Feed') }}>
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
                    
                }}

            />



            <View style={{ marginTop: 25, marginBottom: '40%' }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000000', paddingLeft: '5%' }}>ข่าวสารการออกกำลังกาย</Text>
                    <Text style={{ fontSize: 20, color: '#000000', paddingLeft: '5%' }}>ดูเนื้อหาล่าสุดจาก</Text>
                    <Text style={{ fontSize: 20, color: '#000000', paddingLeft: '5%', fontWeight: 'bold', marginBottom: 15 }}>TRAINING FITNESS.</Text>


                    <View style={styles.container}>
                        <ImageBackground source={require('../../img/new.jpg')}
                            style={styles.image}
                        >
                            <Text
                                style={styles.text}>
                                มีงานวิจัยพบว่าการออกกำลังกายเป็นประจำ
                                ส่งผลดีต่อสุขภาพ
                            </Text>
                            <View style={{ width: '100%', backgroundColor: "#000000a0" }}>
                                <View style={{ width: 150, paddingLeft: '5%', paddingBottom: '10%', }}>
                                    <TouchableOpacity
                                        style={{ backgroundColor: '#ffffff', width: '70%', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 15, }}
                                        onPress={() => { props.navigation.navigate('Feed') }}
                                    >
                                        <Text style={{ color: '#000000', fontWeight: 'normal', fontSize: 14 }}>เพิ่มเติม</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </ImageBackground>
                        <View style={{ backgroundColor: '#ffffff' }}>
                        </View>
                    </View>



                    <View style={styles.container}>
                        <ImageBackground source={require('../../img/Covid.jpg')}
                            style={styles.image}
                        >
                            <Text
                                style={styles.text}>
                                มีงานวิจัยพบว่าการออกกำลังกายเป็นประจำ
                                ส่งผลดีต่อสุขภาพ
                            </Text>
                            <View style={{ width: '100%', backgroundColor: "#000000a0" }}>
                                <View style={{ width: 150, paddingLeft: '5%', paddingBottom: '10%', }}>
                                    <TouchableOpacity
                                        style={{ backgroundColor: '#ffffff', width: '70%', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 15, }}
                                        onPress={() => { props.navigation.navigate('Feed') }}
                                    >
                                        <Text style={{ color: '#000000', fontWeight: 'normal', fontSize: 14 }}>เพิ่มเติม</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ImageBackground>
                        <View style={{ backgroundColor: '#ffffff' }}>
                        </View>
                    </View>



                    <View style={styles.container}>
                        <ImageBackground source={require('../../img/pic1.jpg')}
                            style={styles.image}
                        >
                            <Text
                                style={styles.text}>
                                มีงานวิจัยพบว่าการออกกำลังกายเป็นประจำ
                                ส่งผลดีต่อสุขภาพ
                            </Text>
                            <View style={{ width: '100%', backgroundColor: "#000000a0" }}>
                                <View style={{ width: 150, paddingLeft: '5%', paddingBottom: '10%', }}>
                                    <TouchableOpacity
                                        style={{ backgroundColor: '#ffffff', width: '70%', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 15, }}
                                        onPress={() => { props.navigation.navigate('Feed') }}
                                    >
                                        <Text style={{ color: '#000000', fontWeight: 'normal', fontSize: 14 }}>เพิ่มเติม</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </ImageBackground>
                        <View style={{ backgroundColor: '#ffffff' }}>
                        </View>
                    </View>



                    <View style={styles.lastcontainer}>
                        <ImageBackground source={require('../../img/TOP1.jpg')}
                            style={styles.image}
                        >
                            <Text
                                style={styles.text}>
                                มีงานวิจัยพบว่าการออกกำลังกายเป็นประจำ
                                ส่งผลดีต่อสุขภาพ
                            </Text>
                            <View style={{ width: '100%', backgroundColor: "#000000a0" }}>
                                <View style={{ width: 150, paddingLeft: '5%', paddingBottom: '10%', }}>
                                    <TouchableOpacity
                                        style={{ backgroundColor: '#ffffff', width: '70%', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 15, }}
                                        onPress={() => { props.navigation.navigate('Feed') }}
                                    >
                                        <Text style={{ color: '#000000', fontWeight: 'normal', fontSize: 14 }}>เพิ่มเติม</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ImageBackground>
                        <View style={{ backgroundColor: '#ffffff' }}>
                        </View>
                    </View>


                </ScrollView>
            </View>


        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        paddingBottom: 10
    },
    lastcontainer: {
        flex: 1,
        flexDirection: "column",
        paddingBottom: 30
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
        height: 400,


    },
    text: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
        paddingLeft: '5%',
        paddingBottom: 15,
        paddingTop: 15,
        backgroundColor: "#000000a0"


    }
});

export default ExerciseNews;