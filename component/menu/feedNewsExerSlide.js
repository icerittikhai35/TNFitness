import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView, FlatList, Animated, Alert } from 'react-native';



const { width } = Dimensions.get("window");
const { height } = width * 100 / 60;

export default function Pictureslide({ navigation }) {

    const scrollX = new Animated.Value(0);
    const position = Animated.divide(scrollX, width);

    const [infoexer, setInfoexer] = useState([]);


    useEffect(() => {
        const alldatanews = async () => {
            try {
                const response = await axios.get('http://34.126.141.128/showdata.php')
                setInfoexer(response.data)
            } catch {
                alert('eerroor')
            }
        }
        alldatanews();
    }, [infoexer])



    return (


        <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>
            <ScrollView
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }]
                )}
                horizontal={true}
                style={{
                    width,
                    height
                }}>
                {infoexer.map((item, index) => (
                    <TouchableOpacity onPress={() => navigation.navigate('showExerciseNews')} style={{ width, height }}>
                        <Image
                            key={index}
                            style={{
                                width: '100%',
                                height: '100%'
                            }}
                            source={{ uri: item.url }}
                        />
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center' }}>
                {infoexer.map((i, k) => {
                    let opacity = position.interpolate({
                        inputRange: [k - 1, k, k + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp'
                    })
                    return (
                        <Animated.View key={k} style={{ opacity, height: 10, width: 10, backgroundColor: 'black', borderRadius: 20, margin: 5 }} />
                    )
                })}
            </View>

        </View>



    )
}

