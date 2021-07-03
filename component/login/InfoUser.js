import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, colors, Image, TextInput } from 'react-native';
import SwitchSelector from "react-native-switch-selector";
import { Header, } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { Picker } from '@react-native-community/picker';


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = { date: "2016-05-15" }


  }
  state = {
    dog: 'begle'
  }


  render() {
    const { navigation } = this.props;
    return (
      <>
        <Header
          placement="center"
          centerComponent={<Image
            source={require('../../img/Since1992.png')}
            style={{ width: 60, height: 60, }}
          />}
          containerStyle={{
            backgroundColor: '#292B2D',
            height: 112,
          }}
        />

        <ProgressSteps
          completedProgressBarColor={'#69BD51'}
          progressBarColor={'#E4E4E4'}
          disabledStepIconColor={'#E4E4E4'}

        >

          <ProgressStep
            label="ข้อมูลส่วนตัว"
            nextBtnStyle={styles.NextBtn}
            nextBtnTextStyle={styles.NextBtnText}
            nextBtnText={'ถัดไป'}
          >
            <View style={{ alignItems: 'center', }}>
              <View style={styles.container}>
                <View >
                  <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#3D3D3D', }}>ข้อมูลผู้ใช้งาน</Text>
                </View>

                <View style={{ width: '70%', marginTop: 50, alignItems: 'center', margin: 5 }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#3D3D3D', margin: 5 }}>เพศ</Text>
                  <SwitchSelector
                    borderRadius={6}
                    initial={0}
                    onPress={value => this.setState({ gender: value })}
                    textColor={'#3D3D3D'} //'#7a44cf'
                    selectedColor={'#ffffff'}
                    buttonColor={'#69BD51'}
                    borderColor={'#ffffff'}
                    backgroundColor={'#ffffff'}
                    hasPadding
                    options={[
                      { label: "หญิง", value: "f", imageIcon: require('../../assets/img/female.png') }, //images.feminino = require('./path_to/assets/img/feminino.png')
                      { label: "ชาย", value: "m", imageIcon: require('../../assets/img/female.png') } //images.masculino = require('./path_to/assets/img/masculino.png')
                    ]}
                    testID="gender-switch-selector"
                    accessibilityLabel="gender-switch-selector"
                  />
                </View>

                <View style={{ width: 280, alignItems: 'center', }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#3D3D3D', margin: 5 }}>วันเกิด</Text>
                  <DatePicker
                    style={{ width: '100%', backgroundColor: '#fffffff' }}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    textColor={'#3D3D3D'}
                    format="YYYY-MM-DD"
                    minDate="1920-01-01"
                    maxDate="2021-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateInput: {
                        marginLeft: 0,
                        backgroundColor: '#ffffff',
                        borderRadius: 7,
                        borderWidth: 0
                      }
                      // ... You can check the source to find the other keys.
                    }}

                  />
                </View>

                <View style={{ width: 280, alignItems: 'center', }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#3D3D3D', margin: 5 }}>น้ำหนัก</Text>
                  <TextInput
                    style={{ width: '100%', height: 45, margin: '1%', borderWidth: 0, borderRadius: 5, backgroundColor: '#ffffff' }}
                    fontSize={18}
                    placeholder="กรอกน้ำหนัก (กิโลกรัม)"
                    textAlign='center'
                    keyboardType='numeric'
                  // onChangeText={(text) => setPassword(text)}
                  />
                </View>
                <View style={{ width: 280, alignItems: 'center', }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#3D3D3D', margin: 5 }}>ส่วนสูง</Text>
                  <TextInput
                    style={{ width: '100%', height: 45, margin: '1%', borderWidth: 0, borderRadius: 5, backgroundColor: '#ffffff' }}
                    fontSize={18}
                    placeholder="กรอกส่วนสูง (เซนติเมตร)"
                    textAlign='center'
                    keyboardType='numeric'
                  // onChangeText={(text) => setPassword(text)}

                  />

                </View>

              </View>
            </View>
          </ProgressStep>


          <ProgressStep
            label="เป้าหมาย"
            nextBtnStyle={styles.NextBtn}
            nextBtnTextStyle={styles.NextBtnText}
            previousBtnStyle={styles.previousBtn}
            previousBtnTextStyle={styles.previousBtnText}
            previousBtnText={'ย้อนกลับ'}
            nextBtnText={'ถัดไป'}
          >
            <View style={styles.container}>
              <View >
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#3D3D3D', }}>ข้อมูลผู้ใช้งาน</Text>
              </View>
              <View style={styles.containerPicker}>
                <Picker style={{ width: '100%',backgroundColor:'#ffffff',borderRadius:15 ,alignItems:'center',justifyContent:'center'}}
                  selectedValue={this.state.dog}
                  enabled={true}
                  onValueChange={(itemValue, itemIndex) => this.setState({ dog: itemValue })}
                >
                  <Picker.Item label="ลดไขมัน" value="1"></Picker.Item>
                  <Picker.Item label="สร้างกล้ามเนื้อ " value="2"></Picker.Item>
                  <Picker.Item label="เพื่อสุขภาพ" value="3"></Picker.Item>
                </Picker>

              </View>
            </View>
          </ProgressStep>
          <ProgressStep
            label="ประสบการณ์"
            nextBtnStyle={styles.NextBtn}
            nextBtnTextStyle={styles.NextBtnText}
            previousBtnStyle={styles.previousBtn}
            previousBtnTextStyle={styles.previousBtnText}
            previousBtnText={'ย้อนกลับ'}
            finishBtnText={'เสร็จสิ้น'}
            onSubmit={() => { navigation.navigate('InformationScreen') }}
          >
             <View style={styles.container}>
              <View >
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#3D3D3D', }}>ข้อมูลผู้ใช้งาน</Text>
              </View>
              <View style={styles.containerPicker}>
                <Picker style={{ width: '100%',backgroundColor:'#ffffff',borderRadius:15 ,alignItems:'center',justifyContent:'center'}}
                  selectedValue={this.state.dog}
                  enabled={true}
                  onValueChange={(itemValue, itemIndex) => this.setState({ dog: itemValue })}
                >
                  <Picker.Item label="มือใหม่" value="1"></Picker.Item>
                  <Picker.Item label="ปานกลาง " value="2"></Picker.Item>
                  <Picker.Item label="ประสบการณ์สูง" value="3"></Picker.Item>
                </Picker>

              </View>
            </View>
          </ProgressStep>
        </ProgressSteps>



      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 18,
    marginBottom: 50,
  },
  NextBtn: {
    backgroundColor: '#69BD51',
    borderRadius: 7,
    width: 100,
    alignItems: 'center',
  },
  NextBtnText: {
    color: '#ffffff',
    fontSize: 18,

  },
  previousBtn: {
    backgroundColor: '#545454',
    borderRadius: 7,
    width: 100,
    alignItems: 'center',
  },
  previousBtnText: {
    color: '#ffffff',
    fontSize: 18,

  },
  containerPicker: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: '80%',
    height: 200,
    borderRadius: 7


  },
});