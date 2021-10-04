import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { ListItem, Header, Image, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { data, week, ExerciseLeg } from '../../DataExercise';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

let datesWhitelist = [
  {
    start: moment(),
    end: moment().add(7, "days")
  }
];
console.log(datesWhitelist);

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
            <CalendarStrip
              calendarAnimation={{ type: 'sequence', duration: 50 }}
              style={{ height: 100, paddingTop: 20, paddingBottom: 10 }}
              calendarHeaderStyle={{ color: '#69BD51' }}
              calendarColor={'#3D3D3D'}
              dateNumberStyle={{ color: 'white' }}
              dateNameStyle={{ color: 'white' }}
              highlightDateNumberStyle={{ color: '#69BD51' }}
              highlightDateNameStyle={{ color: '#69BD51' }}
              disabledDateNameStyle={{ color: 'grey' }}
              disabledDateNumberStyle={{ color: 'grey' }}
              datesWhitelist={datesWhitelist}
            // datesBlacklist={datesBlacklist}
            // iconLeft={require('./img/left-arrow.png')}
            // iconRight={require('./img/right-arrow.png')}
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
