import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native';
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

const ManageExercise = (props) => {
    const [items, setItems] = useState({});
    const [day, setDay] = useState();
    const [showdata, setShowdata] = useState([]);
    const [iduser, setIduser] = useState();

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
    console.log(iduser)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://34.126.141.128/test.php', {
                    params: {
                        iduser: 1
                    }
                })
                setShowdata(response.data);
            } catch (err) {
                alert(err);
            }
        }
        fetchData();
    }, [showdata]);



    const renderItem = (item, firstItemInDay) => {
        return (
            <>

                <TouchableOpacity onPress={() => console.log(items)} style={{ paddingLeft: '0%', paddingRight: '5%', backgroundColor: '#3D3D3D', }}>
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
                            <Text style={{ fontSize: 20, color: '#ffffff', alignItems: 'center', }}>{item.neme_exersice}</Text>
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

                    <Text>{day}</Text>
                    <Agenda
                        items={showdata}
                        onCalendarToggled={(calendarOpened) => { console.log(calendarOpened) }}
                        //renderEmptyDate={renderEmptyDate}
                        //renderDay={renderDay}
                        //โชว์ตาราง
                        onDayPress={(day) => { console.log(day); setDay(day.dateString); }}
                        loadItemsForMonth={loadItems}
                        onCalendarToggled={(calendarOpened) => { console.log(calendarOpened) }}
                        renderItem={(item, firstItemInDay) => { return (renderItem(item, firstItemInDay)) }}
                        current={'2021-01-01'}
                        hideKnob={true}
                        onRefresh={() => console.log('refreshing...')}
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
                        alignItems:'center',
                        
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