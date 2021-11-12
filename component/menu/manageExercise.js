import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { ListItem, Header, Image, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { Avatar } from 'react-native-paper';
import { Exercise } from '../../DataExercise';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { FlatList } from 'react-native';
import Swipeout from 'react-native-swipeout';

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



const ManageExercise = (props,navigation) => {
    const [items, setItems] = useState({});
    const [day, setDay] = useState();
    const [showdata, setShowdata] = useState([]);
    const [iduser, setIduser] = useState();
    const [idmanage, setIdmanage] = useState();
    const [submit, setSubmit] = useState(false)


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
                const res = await AsyncStorage.getItem('id');
                setIduser(res);
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    })




    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://34.126.141.128/test.php', {
                    params: {
                        iduser: iduser
                    }
                })
                setShowdata(response.data);
            } catch (err) {
                alert(err);
            }
        }
        fetchData();
    }, [showdata]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get('http://34.126.141.128/delete_exersice.php', {
              params: {
                idmanage: idmanage
              }
            })
            alert(res.data);
          } catch (err) {
            alert(err);
          }
        }
        if (submit) fetchData();
      }, [submit])


    let swipeBtns = [{
        text: 'ลบ',
        backgroundColor: 'red',
        underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
        onPress: () =>{setSubmit(true); setIdmanage(idmanage) }
      
    }];

    console.log(idmanage);
    const renderItem = (items, firstItemInDay) => {
        return (
            <>
                <Swipeout right={swipeBtns}
                    autoClose='true'
                    backgroundColor='transparent'>


                    <TouchableOpacity onPress={() =>navigation.navigate('PageRCMExercise')} style={{ paddingLeft: '0%', backgroundColor: '#3D3D3D', }}>
                        <View
                            style={{
                                backgroundColor: '#292B2D',
                                borderRadius: 20,
                                height: 120,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                marginBottom: 10,
                                borderRadius: 15,
                                marginRight: '5%'
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
                                    <View style={{ marginBottom: 10 }}>
                                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold' }}>{items.neme_exersice}</Text>
                                    </View>
                                    <View style={{ alignss: 'center', flexDirection: 'row' }}>
                                        <View style={{ alignss: 'center' }}>
                                            <Text style={{ color: 'white', fontSize: 10 }}>จำนวน</Text>
                                            <Text style={{ color: '#69BD51', fontSize: 10 }}>{parseInt(items.volume_exersice)} ครั้ง</Text>
                                        </View>
                                        <View style={{ alignItems: 'center', paddingLeft: '8%' }}>
                                            <Text style={{ color: 'white', fontSize: 10 }}>รอบ</Text>
                                            <Text style={{ color: '#69BD51', fontSize: 10 }}>{items.round_exersice} รอบ</Text>
                                        </View>
                                        <View style={{ alignItems: 'center', paddingLeft: '8%' }}>
                                            <Text style={{ color: 'white', fontSize: 10 }}>น้ำหนัก</Text>
                                            <Text style={{ color: '#69BD51', fontSize: 10 }}>{items.onerm * 80 / 100} กก.</Text>
                                        </View>
                                        <View style={{ alignItems: 'center', paddingLeft: '8%' }}>
                                            <Text style={{ color: 'white', fontSize: 10 }}>เวลาพัก</Text>
                                            <Text style={{ color: '#69BD51', fontSize: 10 }}>{parseInt(items.breaks_exersice)} วินาที</Text>
                                        </View>
                                    </View>

                                </View>
                            </View>
                        </View>
                    </TouchableOpacity >
                </Swipeout>
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
                            onPress={() => { props.navigation.navigate('Training') }}>
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

                <Image
                    style={{ height: 100, width: '100%', borderRadius: 0 }}
                    source={require('../../img/TN3.jpg')}
                />
                <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#9E9E9E', paddingLeft: '5%', paddingTop: 20 }}>เลือกดูโปรเเกรมการออกกำลังกาย</Text>

                <View style={{ flex: 1, backgroundColor: '#3D3D3D', height: 100 }}>
                    <View style={{ paddingTop: 10, alignItems: 'center', width: '100%' }}>
                        <Text style={{ color: '#69BD51', fontWeight: 'bold', fontSize: 16 }}>{day}</Text>
                    </View>
                    <Agenda
                        items={showdata}
                        onCalendarToggled={(calendarOpened) => { console.log(calendarOpened) }}
                        loadItemsForMonth={loadItems}
                        //renderDay={renderDay}
                        //โชว์ตาราง
                        onDayPress={(day) => { console.log(day); setDay(day.dateString); }}
                        //loadItemsForMonth={loadItems}
                        onCalendarToggled={(calendarOpened) => { console.log(calendarOpened) }}
                        renderItem={(item, firstItemInDay) => { return (renderItem(item, firstItemInDay)) }}
                        //current={'2021-01-01'}
                        minDate={'2021-11-01'}
                        //selected={'2021-11-06'}
                        maxDate={'2021-12-31'}
                        hideKnob={true}
                        //onRefresh={() => console.log('refreshing...')}
                        theme={{
                            backgroundColor: '#3D3D3D',
                            calendarBackground: '#3D3D3D',
                            selectedDayBackgroundColor: '#69BD51',
                            selectedDayTextColor: '#ffffff',
                            todayTextColor: '#69BD51',
                            textDisabledColor: '#888888',
                            dayTextColor: '#9E9E9E',
                            agendaKnobColor: '#69BD51',
                            dotColor: '#3D3D3D',
                            agendaTodayColor: '#69BD51',
                            'stylesheet.calendar.header': { week: { marginTop: Platform.OS == 'ios' ? 6 : 2, flexDirection: 'row', justifyContent: 'space-between' } }


                        }}
                    />

                </View>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('ManageInsertExercise', { day: day })}
                    style={{
                        position: 'absolute',
                        left: '80%',
                        top: '75%',
                        backgroundColor: 'white',
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        alignItems: 'center',

                    }}>

                    <Icon
                        name="plus"
                        marginTop={20}
                        size={50}
                        color={'#69BD51'}
                    />
                </TouchableOpacity>
            </View>



        </>
    );

};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: '100%',
        backgroundColor: "#3D3D3D",

    },
});

export default ManageExercise;