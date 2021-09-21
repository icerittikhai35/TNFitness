import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { ListItem, Header, Image, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { ExerciseBack, ExerciseChest,ExerciseLeg } from '../../DataExercise';
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

export default function RecommendedExercise({ navigation, route }) {
  const [items, setItems] = useState({});

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

  //http://34.126.141.128/infouserData.php
  const [user, setUser] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://34.126.141.128/infouserData.php',
          {
            params: {
              id: user
            }
          })
        if (response.data == 'null') {

          alert("null")
        } else {
          let weight = response.data.map((item) => (item.weight));
          setWeight(weight);
          let height = response.data.map((item) => (item.height));
          setHeight(height);
        }
      } catch {
        alert(response.data);
      }
    }
    fetchData();
  }, [user])

  useEffect(() => {
    const fetchData = async () => {
      await AsyncStorage.getItem('id')
        .then((value) => {
          setUser(value);
        })
    }
    fetchData();
  })







  const bmiUser = (parseInt((weight)) / (((parseInt(height)) / 100) * 2))
  //const test = userdata.map(item => (item.iduser))


  const CheckBMI = ({ item, index }) => {

    return (
      ////////ใส่โค้ดแสดงของมึงอะ 
      <View style={{ paddingLeft: '5%', paddingRight: '5%', backgroundColor: '#3D3D3D', marginBottom: 50 }}>
        <View styles={{ width: 500, backgroundColor: 'red' }}>

          <Text >
            {bmiUser}
          </Text>
        </View>
        {ExerciseLeg.map(item => (
          <>
            {bmiUser <= item.bmi ? (
              <>
                <TouchableOpacity onPress={() => navigation.navigate('PageRCMExercise',
                  {
                    name: item.name,
                    volume: item.volume,
                    round: item.round,
                    weight: item.weight,
                    breaks: item.breaks,
                    description: item.description,

                    equipment: item.equipment,
                    Imageequipment: item.Imageequipment,
                    imageUrls: item.imageUrls,


                  }
                )}>


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
                        alignItems: 'center',
                        backgroundColor: '#292B2D',
                        //292B2D
                        margin: 10
                      }}>
                      <Image
                        style={{ height: 100, width: 140, borderRadius: 15 }}
                        source={{ uri: item.imageUrls }}
                      />
                      <View style={{ width: "50%", alignItems: 'flex-start', paddingRight: '5%', paddingLeft: '5%', backgroundColor: '#292B2D' }}>
                        <View style={{ marginBottom: 0 }}>
                          <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold' }}>{item.name}</Text>
                        </View>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                          <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 10 }}>จำนวน</Text>
                            <Text style={{ color: '#69BD51', fontSize: 10 }}>{item.volume}</Text>
                          </View>
                          <View style={{ alignItems: 'center', paddingLeft: '5%' }}>
                            <Text style={{ color: 'white', fontSize: 10 }}>รอบ</Text>
                            <Text style={{ color: '#69BD51', fontSize: 10 }}>{item.round}</Text>
                          </View>
                          <View style={{ alignItems: 'center', paddingLeft: '5%' }}>
                            <Text style={{ color: 'white', fontSize: 10 }}>น้ำหนัก</Text>
                            <Text style={{ color: '#69BD51', fontSize: 10 }}>{item.weight}</Text>
                          </View>
                          <View style={{ alignItems: 'center', paddingLeft: '5%' }}>
                            <Text style={{ color: 'white', fontSize: 10 }}>เวลาพัก</Text>
                            <Text style={{ color: '#69BD51', fontSize: 10 }}>{item.breaks}</Text>
                          </View>



                          <View style={{ alignItems: 'flex-end', width: '30%', marginBottom: 20 }}>
                            <Image
                              style={{ height: 30, width: 30, borderRadius: 0 }}
                              source={require('../../img/right-tn.png')}
                            />
                          </View>

                        </View>
                      </View>
                    </View>
                  </View>

                </TouchableOpacity>
              </>
            ) : (
              <>
                <View style={{ backgroundColor: 'transparent' }}></View>
              </>
            )}

          </>
        ))}

      </View>



    )

  }
  //  console.log(parseInt(user))





  return (
    <>

      <Header
        placement="center"
        leftComponent={
          <View style={{ marginTop: 19 }}>
            <TouchableOpacity
              onPress={() => { navigation.goBack() }}>
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
          source={require('../../img/TN1.jpg')}
        />
        <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#9E9E9E', paddingLeft: '5%', paddingTop: 20 }}>เลือกดูโปรเเกรมการออกกำลังกาย</Text>
        <View style={{ flex: 1, backgroundColor: '#3D3D3D' }}>
          <Agenda
            items={items}
           // onCalendarToggled={(calendarOpened) => { console.log(calendarOpened) }}
            // renderEmptyDate={renderEmptyDate}
            //renderDay={renderDay}
            //โชว์ตาราง
            loadItemsForMonth={loadItems}
            renderItem={CheckBMI}
            current={'2021-01-0 1'}
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
              agendaTodayColor: '#69BD51',
              dotColor: '#3D3D3D',


              'stylesheet.calendar.header': { week: { marginTop: Platform.OS == 'ios' ? 6 : 2, flexDirection: 'row', justifyContent: 'space-between' } }


            }}
          />
        </View>
      </View>


    </>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'column',
    height: '100%',
    backgroundColor: "#3D3D3D",

  },
});
