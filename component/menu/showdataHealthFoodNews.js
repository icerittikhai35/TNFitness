import React, { useState, useEffect } from 'react';
import { ImageBackground, Text, ScrollView, View, TouchableOpacity, StyleSheet, Button, FlatList, Dimensions, Animated } from 'react-native';
import { ListItem, Header, Image, Tile } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import axios from 'axios';
import { SliderBox } from 'react-native-image-slider-box';

const { width } = Dimensions.get("window");
const { height } = width * 100 / 60;

export default function showHealthFoodNews({ navigation, route }) {

    const { idNewFeed } = route.params;
    const [info, setInfo] = useState([]);
    const [album, setAlbum] = useState([]);
    const scrollX = new Animated.Value(0);
    const position = Animated.divide(scrollX, width);


    useEffect(() => {
        axios.get('http://34.126.141.128/showdataNewHF.php', {
            params: {
                id: idNewFeed
            }
        }
        )
            .then(response => {
                setInfo(response.data);
            })
            .catch(err => {
                console.log(err)
            })
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://34.126.141.128/showalbumhealthy.php', {
                    params: {
                        id: idNewFeed
                    }
                });
                setAlbum(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [album]);

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



            <View style={{ marginTop: 0, marginBottom: 180 }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >


                    {album == null ? (
                        <>
                            <View style={{ width: '100%', height: 500, marginBottom: 0, backgroundColor: '#e5e5e5', justifyContent: 'center', alignItems: 'center' }}>
                                <Text>ยังไม่มีรูปภาพ</Text>
                            </View>
                        </>
                    ) : (
                        <>
                            <View style={{ width: '100%', height: 500, marginBottom: 0, backgroundColor: '#e5e5e5' }}>
                                <ScrollView
                                    pagingEnabled
                                    showsHorizontalScrollIndicator={false}

                                    onScroll={Animated.event(
                                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                                        { useNativeDriver: false }
                                    )}
                                    horizontal={true}
                                    style={{
                                        width,
                                        height
                                    }}>
                                    {album.map((item, i) => (
                                        <TouchableOpacity style={{ width, height }}>
                                            <Image
                                                key={i}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                source={{ uri: item.album_healthy_img }}
                                            />
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>



                                <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center' }}>
                                    {album.map((i, k) => {
                                        let opacity = position.interpolate({
                                            inputRange: [k - 1, k, k + 1],
                                            outputRange: [0.3, 1.0, 0.3],
                                            extrapolate: 'clamp'
                                        })
                                        return (
                                            <Animated.View key={k} style={{ opacity, height: 10, width: 10, backgroundColor: 'white', borderRadius: 20, margin: 5 }} />
                                        )
                                    })}
                                </View>
                            </View>
                        </>
                    )}
                    <FlatList
                        data={info}
                        keyExtractor={item => item.idnew_feed_health_food}
                        renderItem={({ item }) => (
                            <View key={item} >
                                <Text style={styles.text}>
                                    {item.Topic_new_feed_health_food}
                                </Text>
                                <Text style={styles.detailtext}>
                                    {item.Material_new_feed_health_food}
                                </Text>

                            </View>

                        )}
                    />




                </ScrollView>
            </View>


        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        paddingBottom: 0,


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

