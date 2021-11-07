import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { ListItem, Header, Image, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { data, week, ExerciseLeg } from '../../DataExercise';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import { Agenda } from 'react-native-calendars';


let datesWhitelist = [
  {
    start: moment(),
    end: moment().add(7, "days")
  }
];
console.log(datesWhitelist);

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
}

export default function RecommendedExercise({ navigation, route }) {


  const [currentDate, setCurrentDate] = useState('');
  const [dayloop, setDayloop] = useState('');

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setDayloop(
      date
    )
    setCurrentDate(
      date + '/' + month + '/' + year
    );
  });
  var mydayloop = [];
  for (let i = new Date().getDate(); i <= 7; i++) {
    mydayloop.push(
      <View style={{ width: 50, height: 50, alignItems: 'center', backgroundColor: 'blue', }}>
        <Text style={{ color: 'red' }}>{i}</Text>
      </View>
    );
  }

  //http://34.126.141.128/infouserData.php
  const [user, setUser] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [age, setAge] = useState();
  const [target, setTarget] = useState();
  const [items, setItems] = useState({});
  const [recexer, setRecexer] = useState([]);
  const [date, setDate] = useState([]);
  const [exerdata, setexerdata] = useState([]);

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

  const renderItem = (items) => {
    return (
      <View style={{ paddingLeft: '0%', paddingRight: '5%', backgroundColor: '#3D3D3D', }}>
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
            <Text style={{ fontSize: 20, color: '#ffffff', alignItems: 'center', }}>{items.neme_exersice}</Text>
          </View>
        </View>
      </View>

    );
  };


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
      try {
        const response = await axios.get('http://34.126.141.128/exerrecommend.php')
        setRecexer(response.data);
        console.log(response.data);
      } catch (err) {
        alert(err);
      }
    }
    fetchData();
  }, []);



  useEffect(() => {
    const fetchData = async () => {
      await AsyncStorage.getItem('id')
        .then((value) => {
          setUser(value);
        })
    }
    fetchData();
  })


  //const test = userdata.map(item => (item.iduser))


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
          <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#9E9E9E', paddingLeft: '5%', paddingTop: 10, backgroundColor: '#3D3D3D' }}>เลือกดูโปรเเกรมการออกกำลังกาย</Text>

          <View style={styles.containercarenda}>
            <Agenda
              items={recexer}
              onCalendarToggled={(calendarOpened) => { console.log(calendarOpened) }}
              //renderEmptyDate={renderEmptyDate}
              //renderDay={renderDay}
              //โชว์ตาราง
              loadItemsForMonth={loadItems}
              renderItem={renderItem}
              minDate={'2021-11-01'}
              selected={'2021-11-06'}
              maxDate={'2021-12-31'}
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
  containercarenda: {
    flex: 1,
  },
  container2: {
    flex: 0,
    flexDirection: 'column',
    height: '83%',
    backgroundColor: "#3D3D3D",


  },
});
