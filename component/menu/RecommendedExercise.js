import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { ListItem, Header, Image, Tile } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import { Card, Avatar } from 'react-native-paper';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
}

const RecommendedExercise = (props) => {
  const [items, setItems] = useState({});

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150))
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

  

const renderItem = (item) => {
  return (
    <TouchableOpacity style={{ marginRight: 10, marginTop: 17, backgroundColor: '#3D3D3D', }}>
      {/*<View style={{width: '100%', backgroundColor: '#3D3D3D',}}>*/}
      <Card style={{ backgroundColor: '#3D3D3D', borderWidth: 1 }}>
        <Card.Content>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#3D3D3D',

            }}>
            <Avatar.Text label="Test" />
          </View>
        </Card.Content>
      </Card>
      {/*</View>*/}
    </TouchableOpacity>
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
              name="arrow-left"
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
          onCalendarToggled={(calendarOpened) => { console.log(calendarOpened) }}
          //โชว์ตาราง
          loadItemsForMonth={loadItems}
          renderItem={renderItem}
          current={'2021-01-0 1'}
          hideKnob={true}
          theme={{
            backgroundColor: '#3D3D3D',
            calendarBackground: '#3D3D3D',
            selectedDayBackgroundColor: '#69BD51',
            selectedDayTextColor: '#000000',
            todayTextColor: '#69BD51',
            textDisabledColor: '#888888',
            dayTextColor: '#9E9E9E',
            agendaKnobColor: '#69BD51',
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

export default RecommendedExercise;