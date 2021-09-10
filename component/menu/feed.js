import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Animated, Dimensions } from 'react-native';
import { Header, Image, Tile } from 'react-native-elements';
import axios from 'axios';

const { width } = Dimensions.get("window");
const { height } = width * 100 / 60;

export default function Feed({ navigation, route }) {
  const [info, setInfo] = useState([]);
  const [infoexer, setInfoexer] = useState([]);
  const scrollX = new Animated.Value(0);
  const position = Animated.divide(scrollX, width);



  useEffect(() => {
    const alldatanews = async () => {
      try {
        const response = await axios.get('http://34.126.141.128/showdata.php')
        setInfoexer(response.data)
      } catch {
        alert('eerroor')
      }
    }
    alldatanews();
  }, [infoexer])

  useEffect(() => {
    const alldatanewsFood = async () => {
      try {
        const response = await axios.get('http://34.126.141.128/showdata_Health_Food.php')
        setInfo(response.data)
      } catch {
        alert('error')
      }
    }
    alldatanewsFood();
  }, [info])





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
            borderBottomColor: '#292B2D'
          }}
        />
        <View style={styles.container}>
          <View style={{ marginTop: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: '5%' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ffffff', paddingLeft: '5%' }}>มีอะไรใหม่</Text>
              <TouchableOpacity
                onPress={() => { navigation.navigate('ExerciseNews') }}>
                <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#ffffff', paddingBottom: 4, borderBottomWidth: 1, borderBottomColor: 'white' }}>ดูทั้งหมด</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 20, color: '#ffffff', paddingLeft: '5%' }}>ดูเนื้อหาล่าสุดจาก</Text>
            <Text style={{ fontSize: 20, color: '#ffffff', paddingLeft: '5%', fontWeight: 'bold' }}>TRAINING FITNESS.</Text>
            <View style={{ alignItems: 'center', marginTop: 30, }}>

              <View style={{ width: '100%', height: 500, marginBottom: 0, backgroundColor: '#e5e5e5' }}>
                <ScrollView
                  pagingEnabled
                  showsHorizontalScrollIndicator={false}
                 
                  onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                  )}
                  horizontal={true}
                  style={{
                    width,
                    height
                  }}>
                  {infoexer.map((item, index) => (
                    <TouchableOpacity onPress={() => navigation.navigate('showExerciseNews', { idNewFeed: item.idnew_feed_exer })} style={{ width, height }}>
                      <Image
                        key={index}
                        style={{
                          width: '100%',
                          height: '100%'
                        }}
                        source={{ uri: item.url }}
                      />
                    </TouchableOpacity>
                  ))}
                </ScrollView>
                <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center' }}>
                  {infoexer.map((i, k) => {
                    let opacity = position.interpolate({
                      inputRange: [k - 1, k, k + 1],
                      outputRange: [0.3, 1, 0.3],
                      extrapolate: 'clamp'
                    })
                    return (
                      <Animated.View key={k} style={{ opacity, height: 10, width: 10, backgroundColor: 'black', borderRadius: 20, margin: 5 }} />
                    )
                  })}
                </View>
              </View>

              <View style={{ width: '100%', height: 300 }}>
                <Tile
                  imageSrc={require('../../img/feed.jpg')}
                  title="เริ่มต้นออกกำลังกาย                                กับ TRAINING FITNESS."
                  featured
                  onPress={() => { navigation.navigate('Training') }}
                />
              </View>

              <View style={{ width: '100%', height: 590, marginBottom: 0, backgroundColor: 'white' }}>
                <View style={{ marginTop: 40, marginBottom: 20 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: '5%' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000000', paddingLeft: '5%' }}>อาหารเเละสุขภาพ</Text>
                    <TouchableOpacity
                      onPress={() => { navigation.navigate('FoodNews') }}>
                      <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#000000', paddingBottom: 4, borderBottomWidth: 1, borderBottomColor: 'black' }}>ดูทั้งหมด</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <ScrollView
                  style={{ marginTop: 0, paddingLeft: '5%', }}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {info.map(item => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('showHealthFoodNews', { idNewFeed: item.idnew_feed_health_food })}
                    >
                      <View style={{ width: 200, height: 400, marginRight: 15, }}>
                        <Image
                          style={{ height: 350, width: '100%', borderRadius: 15 }}
                          source={{ uri: item.Cover_page }}
                        />
                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#000000', }}>
                          {item.Topic_new_feed_health_food}
                        </Text>
                        <Text style={{ fontSize: 12, color: '#000000', }}>
                          {item.Material_new_feed_health_food}
                        </Text>
                      </View>
                    </TouchableOpacity>


                  ))}

                </ScrollView>
              </View>




            </View>
          </View>
        </View>
      </ScrollView>
    </View>




  );
}



const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'column',
    height: '100%',
    backgroundColor: "#3D3D3D",
    margin: 0

  },
});

