import React, { useState, useEffect } from 'react';
import { ImageBackground, Text, ScrollView, View, TouchableOpacity, StyleSheet, Button, FlatList } from 'react-native';
import { ListItem, Header, Image, Tile } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import axios from 'axios';
import { SliderBox } from 'react-native-image-slider-box';

export default function showHealthFoodNews({ navigation, route }) {
    const path = ['01.jpg', '02.jpg', '03.jpg'];
    const { idNewFeed } = route.params;
    const [info, setInfo] = useState([]);


    useEffect(() => {
        axios.get('http://35.240.174.142/showdataNewHF.php', {
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

    const images = info.map(item => (
        item.Link_forder_img
    ))
    const showpath = path.map(item => (
        images + item
    ))

    return (
        <>

            <Header
                placement="center"
                leftComponent={
                    <View style={{ marginTop: 0, alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('ExerciseNews') }}>
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



            <View style={{ marginTop: 0, marginBottom: '5%' }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >


                    <View style={styles.container}>
                        <SliderBox sliderBoxHeight={400} images={showpath} />
                        <View style={{ backgroundColor: '#ffffff' }}>
                        </View>
                    </View>
                    <FlatList
                        data={info}
                        keyExtractor={item => item.idnew_feed_health_food}
                        renderItem={({ item }) => (
                            <View key={item}>         
                                <Text style={styles.text}>
                                    {item.Topic_new_feed_health_food}
                                </Text>
                                <Text style={styles.text}>
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
        paddingBottom: 0
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
        color: "black",
        fontSize: 22,
        fontWeight: "bold",
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingBottom: 15,
        paddingTop: 15,
        // backgroundColor: "#000000a0"


    }
});

