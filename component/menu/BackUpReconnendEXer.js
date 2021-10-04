import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { ListItem, Header, Image, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { data, ExerciseChest, ExerciseLeg } from '../../DataExercise';
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
      }
      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
        //console.log(key);
      });
      setItems(newItems);
      // console.log(newItems);
    }, 1000);


  }

  //http://34.126.141.128/infouserData.php
  const [user, setUser] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [age, setAge] = useState();
  const [target, setTarget] = useState();



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
          let age = response.data.map((item) => (item.old));
          setAge(age);
          let target = response.data.map((item) => (item.target));
          setTarget(target);
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


  const renderItem = (item) => {
    return (
      <>
        <View style={{ paddingLeft: '0%', paddingRight: '5%', backgroundColor: '#3D3D3D', }}>


          <>
            {(() => {
              if (bmiUser <= item.bmi && age <= item.age && target == 1) {
                return (
                  <TouchableOpacity onPress={() => navigation.navigate('PageRCMExercise',
                    {
                      name: item.name,
                      volume: parseInt(item.volume * 1.2),
                      round: item.round,
                      weight: item.weight,
                      breaks: parseInt(item.breaks - 20),
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
                              <Text style={{ color: '#69BD51', fontSize: 10 }}>{parseInt(item.volume * 1.2)} ครั้ง</Text>
                            </View>
                            <View style={{ alignItems: 'center', paddingLeft: '8%' }}>
                              <Text style={{ color: 'white', fontSize: 10 }}>รอบ</Text>
                              <Text style={{ color: '#69BD51', fontSize: 10 }}>{item.round} รอบ</Text>
                            </View>
                            <View style={{ alignItems: 'center', paddingLeft: '8%' }}>
                              <Text style={{ color: 'white', fontSize: 10 }}>น้ำหนัก</Text>
                              <Text style={{ color: '#69BD51', fontSize: 10 }}>{item.weight} กก.</Text>
                            </View>
                            <View style={{ alignItems: 'center', paddingLeft: '8%' }}>
                              <Text style={{ color: 'white', fontSize: 10 }}>เวลาพัก</Text>
                              <Text style={{ color: '#69BD51', fontSize: 10 }}>{parseInt(item.breaks - 20)} วินาที</Text>
                            </View>
                          </View>

                        </View>
                      </View>
                    </View>

                  </TouchableOpacity>
                )
              } if (bmiUser <= item.bmi && age <= item.age && target == 2) {
                return (
                  <TouchableOpacity onPress={() => navigation.navigate('PageRCMExercise',
                    {
                      name: item.name,
                      volume: parseInt(item.volume),
                      round: item.round,
                      weight: parseInt(item.weight * 2),
                      breaks: parseInt(item.breaks + 20),
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
                              <Text style={{ color: '#69BD51', fontSize: 10 }}>{parseInt(item.volume)} ครั้ง</Text>
                            </View>
                            <View style={{ alignItems: 'center', paddingLeft: '8%' }}>
                              <Text style={{ color: 'white', fontSize: 10 }}>รอบ</Text>
                              <Text style={{ color: '#69BD51', fontSize: 10 }}>{item.round} รอบ</Text>
                            </View>
                            <View style={{ alignItems: 'center', paddingLeft: '8%' }}>
                              <Text style={{ color: 'white', fontSize: 10 }}>น้ำหนัก</Text>
                              <Text style={{ color: '#69BD51', fontSize: 10 }}>{parseInt(item.weight * 2)} กก.</Text>
                            </View>
                            <View style={{ alignItems: 'center', paddingLeft: '8%' }}>
                              <Text style={{ color: 'white', fontSize: 10 }}>เวลาพัก</Text>
                              <Text style={{ color: '#69BD51', fontSize: 10 }}>{parseInt(item.breaks + 20)} วินาที</Text>
                            </View>
                          </View>

                        </View>
                      </View>
                    </View>

                  </TouchableOpacity>
                )
              } if (bmiUser <= item.bmi && age <= item.age && target == 3) {
                return (
                  <TouchableOpacity onPress={() => navigation.navigate('PageRCMExercise',
                    {
                      name: item.name,
                      volume: parseInt(item.volume),
                      round: item.round,
                      weight: parseInt(item.weight),
                      breaks: parseInt(item.breaks),
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
                              <Text style={{ color: '#69BD51', fontSize: 10 }}>{parseInt(item.volume)} ครั้ง</Text>
                            </View>
                            <View style={{ alignItems: 'center', paddingLeft: '8%' }}>
                              <Text style={{ color: 'white', fontSize: 10 }}>รอบ</Text>
                              <Text style={{ color: '#69BD51', fontSize: 10 }}>{item.round} รอบ</Text>
                            </View>
                            <View style={{ alignItems: 'center', paddingLeft: '8%' }}>
                              <Text style={{ color: 'white', fontSize: 10 }}>น้ำหนัก</Text>
                              <Text style={{ color: '#69BD51', fontSize: 10 }}>{parseInt(item.weight)} กก.</Text>
                            </View>
                            <View style={{ alignItems: 'center', paddingLeft: '8%' }}>
                              <Text style={{ color: 'white', fontSize: 10 }}>เวลาพัก</Text>
                              <Text style={{ color: '#69BD51', fontSize: 10 }}>{parseInt(item.breaks)} วินาที</Text>
                            </View>
                          </View>

                        </View>
                      </View>
                    </View>

                  </TouchableOpacity>
                )
              } else {
                return (
                  <>
                  
                  </>
                )
              }
            })()}



          </>


        </View>

      </>
    );
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
        <View style={styles.container2}>
          <Image
            style={{ height: 100, width: '100%', borderRadius: 0 }}
            source={require('../../img/TN1.jpg')}
          />
          <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#9E9E9E', paddingLeft: '5%', paddingTop: 20 }}>เลือกดูโปรเเกรมการออกกำลังกาย</Text>
          <View style={{ flex: 1, backgroundColor: '#3D3D3D' }}>
            <Agenda
              items={data}
              // onCalendarToggled={(calendarOpened) => { console.log(calendarOpened) }}
              // renderEmptyDate={renderEmptyDate}
              //renderDay={renderDay}
              pastScrollRange = { 1 } 
              futureScrollRange = { 1 }
              //โชว์ตาราง
              loadItemsForMonth={loadItems}
              renderItem={renderItem}

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
                agendaTodayColor: '#69BD51',
                dotColor: '#3D3D3D',


                'stylesheet.calendar.header': { week: { marginTop: Platform.OS == 'ios' ? 6 : 2, flexDirection: 'row', justifyContent: 'space-between' } }


              }}
            />
          </View>
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
  container2: {
    flex: 0,
    flexDirection: 'column',
    height: '83%',
    backgroundColor: "#3D3D3D",


  },
});
