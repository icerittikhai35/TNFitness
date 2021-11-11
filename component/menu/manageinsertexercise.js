import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, Alert } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { ListItem, Header, Image, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { Avatar } from 'react-native-paper';
import { Exercise } from '../../DataExercise';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
}

const renderDay = (day, item) => {
    if (!item) {
        return (<View></View>)
    }
}
const renderEmptyDate = () => {
    return (
        <View style={{ height: 0 }}></View>
    );
}

const ManageInsertExercise = ({ route, navigation }) => {
    const { day } = route.params;
    const [items, setItems] = useState({});
    const [dataexer, setDataexer] = useState([]);
    const [iduser, setIduser] = useState(1);
    const [idexer, setIdexer] = useState();
    const [submit, setSubmit] = useState(false);


    const loadItems = (day) => {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);
                if (!items[strTime]) {
                    items[strTime] = [];
                    const numItems = Math.floor(1);
                    for (let j = 0; j < numItems; j++) {
                        items[strTime].push({
                            name: 'Item for ' + ' #' + j,
                            height: 0,
                            width: 0
                        });
                    }
                }
            }
            const newItems = {};
            Object.keys(items).forEach(key => {
                newItems[key] = items[key];
            });
            setItems(newItems);
        }, 1000);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://34.126.141.128/showdataexercise.php')
                setDataexer(response.data);
            } catch (err) {
                alert(err);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://34.126.141.128/insertmanageexer.php', { day: day, iduser: iduser, idexer: idexer })
                setSubmit(false);
                alert(response.data)
            } catch (err) {
                alert(err);
                setSubmit(false);
            }
        }
        if (submit) fetchData();
    }, [submit]);


    const renderItem = (item, firstItemInDay) => {
        return (
            <>

                < TouchableOpacity onPress={() => console.log(items)} style={{ paddingLeft: '0%', paddingRight: '5%', backgroundColor: '#3D3D3D', }}>
                    <View
                        style={{
                            backgroundColor: '#292B2D',
                            borderRadius: 20,
                            height: 120,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            marginBottom: 10,
                            borderRadius: 15
                        }}>

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: 10
                            }}>
                            <Text style={{ fontSize: 20, color: '#ffffff', alignItems: 'center', }}>5555</Text>
                        </View>
                    </View>
                </TouchableOpacity >
            </>
        );
    };
    return (
        <>

            <Header
                placement="center"
                leftComponent={
                    <View style={{ marginTop: 19 }}>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('ManageExercise') }}>
                            <Icon
                                name="arrowleft"
                                size={25}
                                color={'white'}
                            />
                        </TouchableOpacity>
                    </View>}
                centerComponent={<Image
                    source={require('../../img/Since1992.png')}
                    style={{ width: 60, height: 60, }}
                />}

                containerStyle={{
                    backgroundColor: '#292B2D',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    height: 112,
                    borderBottomColor: '#292B2D'

                }}
            />



            <View style={styles.container}>


                <View style={{ flex: 10, backgroundColor: '#3D3D3D', height: 100, alignItems: 'center' }}>
                    <ScrollView width={'100%'} alignItems='center' showsVerticalScrollIndicator={false}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#9E9E9E', paddingTop: 20, marginBottom: 20 }}>เลือกท่าออกกำลังกาย</Text>
                        </View>
                        {dataexer.map(items => (
                            <>
                                <TouchableOpacity
                                    onPress={() => { setSubmit(true); setIdexer(items.id_exersice);}}
                                    style={{
                                        width: '100%',
                                        backgroundColor: '#3D3D3D',
                                        borderRadius: 20,
                                        height: 120,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        marginBottom: 10,
                                        borderRadius: 15,
                                        alignContent: 'center'
                                    }}>

                                    <View
                                        style={{
                                            backgroundColor: '#292B2D',
                                            borderRadius: 20,
                                            height: 120,
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            borderRadius: 15,

                                        }}>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                backgroundColor: '#292B2D',
                                                //292B2D
                                                margin: 10,
                                            }}>
                                            <Image
                                                style={{ height: 100, width: 140, borderRadius: 15 }}
                                                source={{ uri: items.imageUrls_exersice }}
                                            />
                                            <View style={{ width: "50%", alignItems: 'flex-start', paddingRight: '5%', paddingLeft: '5%', backgroundColor: '#292B2D' }}>
                                                <View >
                                                    <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold' }}>{items.neme_exersice}</Text>
                                                </View>


                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </>
                        ))}
                    </ScrollView>



                </View>

            </View>



        </>
    );

};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: '100%',
        backgroundColor: "#3D3D3D",
        alignItems: 'center'

    },
});

export default ManageInsertExercise;