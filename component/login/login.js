import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import * as Facebook from 'expo-facebook';
import { Icon } from 'react-native-elements'
import * as Google from 'expo-google-app-auth';

//npm install axios –save อย่าลืมติดตั้ง
import axios from 'axios';


//Facebook Login
async function logIn() {
  try {
    await Facebook.initializeAsync({
      appId: '2973404156261717',
    });
    const {
      type,
      token,
      expirationDate,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
}


export default function LoginInfo(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [googleSubmitting, setGoogleSubmitting] = useState("");


  let [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    const authenticate = async () => {
      axios
        .post(
          "http://34.126.113.88/login.php",
          JSON.stringify({
            email: email,
            password: password,
          })
        )
        .then((response) => {
          if (response.data == 'true') {
            props.navigation.navigate("connectInfoUser");
            setIsSubmit(false) 
          } else {
            alert(JSON.stringify(response.data));
            setIsSubmit(false)
          }
          console.log(response.data);
          setIsSubmit(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (isSubmit) authenticate();
  }, [isSubmit]);

  const usernameHandler = (text) => {
    setEmail(text);

  };



  //login Google
  const handleGoogleSignin = () => {
    setGoogleSubmitting(true);
    const config = {
      androidClientId: '138752987855-9dqhqdaqretoarhumn0tmbk793nifvgi.apps.googleusercontent.com',
      scopes: ['profile', 'email']
    };

    Google.logInAsync(config)
      .then((result) => {
        const { type, user } = result;

        if (type == 'success') {
          const { email, name, photoUrl } = user;
          handleMessage('Google signin successful', 'SUCCESS');
          setTimeout(() => props.navigation.navigate('Home', { email, name, photoUrl }), 1000);
        } else {
          handleMessage('Google login is fail..');
        }
        setGoogleSubmitting(false);
      })
      .catch((error) => {
        console.log(error);
        handleMessage('An error. Try again');
        setGoogleSubmitting(false);
      });
  };


  return (
    <View style={{ height: '100%', backgroundColor: '#3D3D3D' }}>

      <View style={{ alignItems: 'center', paddingTop: '15%' }}>
        <Image
          source={require('../../img/Since1992.png')}
          style={{ width: 300, height: 300, }}
        />

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <TextInput label='ชื่อผู้ใช้งาน'
            style={{ width: '70%', height: 45, margin: '1%', borderWidth: 1, borderRadius: 5, }}
            onChangeText={usernameHandler}
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

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <TextInput label='รหัสผ่าน '
            style={{ width: '70%', height: 45, marginBottom: '0%', borderWidth: 1, borderRadius: 5 }}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
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


        <View style={{ flexDirection: 'row', width: '70%', justifyContent: 'flex-end' }}>
          <Text style={{ color: '#9A9A9A', fontWeight: "100", marginBottom: '5%', justifyContent: 'flex-end' }}>ลืมรหัสผ่าน ?</Text>
        </View>

        <View style={{ paddingTop: '0%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{ backgroundColor: '#69BD51', width: '70%', height: 45, justifyContent: 'center', alignItems: 'center', borderRadius: 6, }}
            title={"Go to the hell"}
            onPress={() => setIsSubmit(true)}
          >
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>เข้าสู่ระบบ</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', width: '70%', margin: '3%' }}>
          <View style={{ flex: 1, height: 2, backgroundColor: '#6A6767', marginTop: 10, marginBottom: 10 }} />
          <View style={{ alignItems: 'center' }}>
            <Text style={{ color: '#6A6767', fontWeight: 'bold', fontSize: 14, margin: '5%' }}>or connection with</Text>
          </View>
          <View style={{ flex: 1, height: 2, backgroundColor: '#6A6767', marginTop: 10, marginBottom: 10, }} />
        </View>

        <View style={{ paddingTop: '0%', width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: 10 }}>
          <TouchableOpacity
            style={{ backgroundColor: '#FFFFFF', width: '70%', height: 45, justifyContent: 'center', alignItems: 'center', borderRadius: 6, flexDirection: 'row' }}
            title={"Go to the hell"}
            onPress={logIn}
          >
           <Image
              source={require('../../img/facebook.png')}
              style={{ width: 30, height: 30,marginRight:5 }}
            />
            <Text style={{ color: '#4267B2', fontWeight: 'bold', fontSize: 18 }}>เข้าสู่ระบบ ด้วย Facebook</Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingTop: '0%', width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>

          <TouchableOpacity
            style={{ backgroundColor: '#FFFFFF', width: '70%', height: 45, justifyContent: 'center', alignItems: 'center', borderRadius: 6, flexDirection: 'row' }}
            title={"Go to the hell"}
            onPress={handleGoogleSignin}
          >
            <Image
              source={require('../../img/Google.png')}
              style={{ width: 30, height: 30,marginRight:25 }}
            />
            <Text style={{ color: '#4267B2', fontWeight: 'bold', fontSize: 18 }}>เข้าสู่ระบบ ด้วย Google</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
          <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>สร้างบัญชัผู้ใช้ใหม่ ? </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Register')}>
            <Text style={{ color: '#69BD51', fontWeight: 'bold' }}>สมัครมาชิก</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
}


const styles = StyleSheet.create({

});
