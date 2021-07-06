import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Header, Image, Tile } from 'react-native-elements';


const feed = (props) => {

  return (

    <View style={{ height: '100%', backgroundColor: '#3D3D3D', margin: 0 }}>



      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Header
          placement="center"
          centerComponent={<Image
            source={require('../../img/Since1992.png')}
            style={{ width: 60, height: 60, margin: 0 }}
          />}
          containerStyle={{
            backgroundColor: '#292B2D',
            height: 112,
            margin: 0,
            borderBottomColor:'#292B2D'
          }}
        />
        <View style={styles.container}>
          <View style={{ marginTop: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: '5%' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ffffff', paddingLeft: '5%' }}>มีอะไรใหม่</Text>
              <TouchableOpacity
                onPress={() => { props.navigation.navigate('ExerciseNews') }}>
                <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#ffffff', paddingBottom: 4, borderBottomWidth: 1, borderBottomColor: 'white' }}>ดูทั้งหมด</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 20, color: '#ffffff', paddingLeft: '5%' }}>ดูเนื้อหาล่าสุดจาก</Text>
            <Text style={{ fontSize: 20, color: '#ffffff', paddingLeft: '5%', fontWeight: 'bold' }}>TRAINING FITNESS.</Text>
            <View style={{ alignItems: 'center', marginTop: 30, }}>
              <View style={{ width: '100%', marginBottom: 0 }}>
                <Image
                  style={{ height: 530, width: '100%', borderRadius: 0 }}
                  source={require('../../img/new.jpg')}
                />
              </View>

              <View style={{ width: '100%', height: 300 }}>
                <Tile
                  imageSrc={require('../../img/feed.jpg')}
                  title="เริ่มต้นออกกำลังกาย                                กับ TRAINING FITNESS."
                  featured
                  onPress={() => { props.navigation.navigate('Training') }}
                />
              </View>

              <View style={{ width: '100%', height: 590, marginBottom: 0, backgroundColor: 'white' }}>
                <View style={{ marginTop: 40, marginBottom: 20 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: '5%' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000000', paddingLeft: '5%' }}>อาหารเเละสุขภาพ</Text>
                    <TouchableOpacity
                      onPress={() => { props.navigation.navigate('FoodNews') }}>
                      <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#000000', paddingBottom: 4, borderBottomWidth: 1, borderBottomColor: 'black' }}>ดูทั้งหมด</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <ScrollView
                  style={{ marginTop: 0, paddingLeft: '5%', }}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >

                  <View style={{ width: 200, height: 400, marginRight: 15, }}>
                    <Image
                      style={{ height: 350, width: '100%', borderRadius: 15 }}
                      source={require('../../img/pic1.jpg')}
                    />
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#000000', }}>อาหาร</Text>
                    <Text style={{ fontSize: 12, color: '#000000', }}>การเลือกกินอาหารที่เป็นประโยชน์</Text>
                  </View>

                  <View style={{ width: 200, height: 400, marginRight: 15 }}>
                    <Image
                      style={{ height: 350, width: '100%', borderRadius: 15 }}
                      source={require('../../img/Covid.jpg')}
                    />
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#000000', }}>สุขภาพ</Text>
                    <Text style={{ fontSize: 12, color: '#000000', }}>การเลือกกินอาหารที่เป็นประโยชน์</Text>
                  </View>

                  <View style={{ width: 200, height: 400, marginRight: 15 }}>
                    <Image
                      style={{ height: 350, width: '100%', borderRadius: 15 }}
                      source={require('../../img/new.jpg')}
                    />
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#000000', }}>อาหาร</Text>
                    <Text style={{ fontSize: 12, color: '#000000', }}>การเลือกกินอาหารที่เป็นประโยชน์</Text>
                  </View>


                </ScrollView>
              </View>




            </View>
          </View>
        </View>
      </ScrollView>
    </View>




  );

};
const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'column',
    height: '100%',
    backgroundColor: "#3D3D3D",
    margin: 0

  },
});

export default feed;