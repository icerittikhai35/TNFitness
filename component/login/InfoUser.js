import React from 'react'
import {
  View,
  Button,
  StyleSheet,
  Image
} from 'react-native'
import { Header, } from 'react-native-elements';
import { TextInput } from 'react-native-paper';

export default class InfoUser extends React.Component {
  state = {
    username: '', password: '', email: '', phone_number: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { username, password, email, phone_number } = this.state
    try {
      // here place your signup logic
      console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }

  render() {
    const { navigation } = this.props;
    return (
      <>
        <Header
          placement="center"
          centerComponent={<Image
            source={require('../../img/Since1992.png')}
            style={{ width: 60, height: 60, margin: 0 }}

          />}
          containerStyle={{
            backgroundColor: '#292B2D',
            height: 112,
            margin: 0
          }}
        />

        <View style={styles.container}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
            <TextInput label='ชื่อผู้ใช้งาน'
              style={{ width: '70%', height: 45, margin: '1%', borderWidth: 1, borderRadius: 5, }}
              //onChangeText={usernameHandler}
              multiline={false}
              theme={{
                colors: {
                  primary: '#AEAEAE',
                  underlineColor: 'transparent',
                  margin: 10,
                  text: 'black'
                }
              }}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder='Password'
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('password', val)}
          />
          <TextInput
            style={styles.input}
            placeholder='Email'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('email', val)}
          />
          <TextInput
            style={styles.input}
            placeholder='Phone Number'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('phone_number', val)}
          />
          <Button
            title='Sign Up'
            onPress={() => navigation.navigate('InformationScreen')}
          />
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#292B2D'
  }
})