import React, { useState } from 'react';
import { ImageBackground, Text, ScrollView, View, TouchableOpacity, StyleSheet, Button } from 'react-native';

import { ListItem, Header, Image, Tile } from 'react-native-elements';

import Icon from 'react-native-vector-icons/Feather';

const showExerciseNews = (props) => {
    return (
        <>

            <Header
                placement="center"
                leftComponent={
                    <View style={{ marginTop: 0, alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => { props.navigation.navigate('ExerciseNews') }}>
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
                    borderBottomColor:'#292B2D'

                }}

            />



            <View style={{ marginTop: 0, marginBottom: '5%' }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >


                    <View style={styles.container}>
                        <ImageBackground source={require('../../img/new.jpg')}
                            style={styles.image}
                        >

                           
                        </ImageBackground>
                        <View style={{ backgroundColor: '#ffffff' }}>
                        </View>
                    </View>
                    <Text
                        style={styles.text}>
                        มีงานวิจัยพบว่าการออกกำลังกายเป็นประจำ
                        ส่งผลดีต่อสุขภาพ
                    </Text>
                    <Text style={{ fontSize: 18, fontWeight: 'normal', color: '#000000', paddingLeft: '5%' ,paddingRight:'5%',marginBottom:'50%'}}>ข่าวสารการออกกำลังกายข่าวสารการออกกำลังกายข่าวสารการออกกำลังกายข่าวสารการออกกำลังกายข่าวสารการออกกำลังกายข่าวสารการออกกำลังกายข่าวสารการออกกำลังกายข่าวสารการออกกำลังกายข่าวสารการออกกำลังกายข่าวสารการออกกำลังกายข่าวสารการออกกำลังกายข่าวสารการออกกำลังกายข่าวสารการออกกำลังกายข่าวสารการออกกำลังกายข่าวสารการออกกำลังกายข่าวสารการออกกำลังกายข่าวสารการออกกำลังกายข่าวสารการออกกำลังกายข่าวสารการออกกำลังกายข่าวสารการออกกำลังกายข่าวสารการออกกำลังกายข่าวสารการออกกำลังกายข่าวสารการออกกำลังกายข่าวสารการออกกำลังกายข่าวสารการออกกำลังกายข่าวสารการออกกำลังกายข่าวสารการออกกำลังกาย</Text>




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
        paddingBottom: 15,
        paddingTop: 15,
       // backgroundColor: "#000000a0"


    }
});

export default showExerciseNews;