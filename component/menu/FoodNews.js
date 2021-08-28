import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, ScrollView, View, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { ListItem, Header, Image, Tile } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import axios from 'axios';

export default function FoodNews({ props, route, navigation }) {
    const [info, setInfo] = useState([])


    useEffect(() => {
        axios.get('http://35.240.174.142/showdata_Health_Food.php'

        )
            .then(response => {
                setInfo(response.data);
            })
            .catch(err => {
                console.log(err)
            })
    })
    return (
        <>
            <Header
                placement="center"
                leftComponent={
                    <View style={{ marginTop: 0, alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('Feed') }}>
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
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000000', paddingLeft: '5%' }}>ข่าวสารอาหารเเละสุขภาพ</Text>
                    <Text style={{ fontSize: 20, color: '#000000', paddingLeft: '5%' }}>ดูเนื้อหาล่าสุดจาก</Text>
                    <Text style={{ fontSize: 20, color: '#000000', paddingLeft: '5%', fontWeight: 'bold', marginBottom: 15 }}>TRAINING FITNESS.</Text>
                    <View style={{paddingBottom:20}}>
                        {info.map(item => (
                            <View style={styles.container}>
                                <ImageBackground source={{ uri: item.Cover_page }}
                                    style={styles.image}
                                >
                                    <Text
                                        style={styles.text}>
                                        {item.Topic_new_feed_health_food}
                                    </Text>
                                    <Text
                                        style={styles.textDetail}>
                                        {item.Material_new_feed_health_food}
                                    </Text>
                                    <View style={{ width: '100%', backgroundColor: "#000000a0" }}>
                                        <View style={{ width: 150, paddingLeft: '5%', paddingBottom: 20,marginTop:20 }}>


                                            <TouchableOpacity
                                                style={{ backgroundColor: '#ffffff', width: '70%', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}
                                                onPress={() => navigation.navigate('showHealthFoodNews', { idNewFeed: item.idnew_feed_health_food })}
                                            >
                                                <Text style={{ color: '#000000', fontWeight: 'normal', fontSize: 14, }}>เพิ่มเติม</Text>
                                            </TouchableOpacity>



                                        </View>
                                    </View>
                                </ImageBackground>
                                <View style={{ backgroundColor: '#ffffff' }}>
                                </View>
                            </View>

                        ))}
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
        paddingBottom: 0,
        paddingTop: 0,
        backgroundColor: "#000000a0"


    },
    textDetail: {
        color: "white",
        fontSize: 16,
        fontWeight: "normal",
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingBottom: 0,
        paddingTop: 0,
        backgroundColor: "#000000a0"


    }
});

