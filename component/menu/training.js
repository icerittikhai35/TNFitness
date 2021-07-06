import React from 'react';
import { Text, StatusBar, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Header, } from 'react-native-elements';


const Training = (props) => {
  return (
    <View style={{ height: '100%', backgroundColor: '#3D3D3D' }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#292B2D"
      />
      <Header
        placement="center"
        centerComponent={<Image
          source={require('../../img/Since1992.png')}
          style={{ width: 60, height: 60, }}
        />}
        containerStyle={{
          backgroundColor: '#292B2D',
          height: 112,
          borderBottomColor:'#292B2D'
        }}
      />
      <View style={styles.container}>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#ffffff', paddingLeft: '5%' }}>การฝึกฝน</Text>
          <Text style={{ fontSize: 10, color: '#ffffff', paddingLeft: '5%' }}>เลือกเมนูสำหรับการฝึกฝน</Text>
          <View style={{ alignItems: 'center', marginTop: 30, }}>



            <View style={{ width: '90%', marginBottom: 20 }}>
              <TouchableOpacity onPress={() => { props.navigation.navigate('RecommendedExercise') }}>
                <Image
                  style={{ height: 150, width: '100%', borderRadius: 20 }}
                  source={require('../../img/TN1.jpg')}
                />
              </TouchableOpacity>
            </View>


            <View style={{ width: '90%', marginBottom: 20 }}>
              <Image
                style={{ height: 150, width: '100%', borderRadius: 20 }}
                source={require('../../img/TN2.jpg')}
              />
            </View>

            <View style={{ width: '90%', }}>
              <Image
                style={{ height: 150, width: '100%', borderRadius: 20 }}
                source={require('../../img/TN3.jpg')}
              />
            </View>


          </View>
        </View>
      </View>
    </View>




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
export default Training;