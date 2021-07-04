import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from 'react-native';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default class EditProfile extends Component {

    render(props) {
        return (
            <View style={styles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.header}>
                       
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                            <Image
                                style={{ height: 25, width: 25, marginLeft:15, marginTop: 13 }}
                                source={require('../../img/arrow.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                    <View style={styles.body}>
                        <View style={styles.bodyContent}>
                            <Text style={styles.name}>John Doe</Text>
                            <Text style={styles.info}>เป้าหมาย : ลดน้ำหนัก / ประสบการณ์ : มือใหม่</Text>
                            <Text style={styles.description}>อายุ:20  ส่วนสูง:180  น้ำหนัก:70</Text>
                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => this.props.navigation.navigate('EditProfile')}

                            >
                                <Text style={{ color: 'white' }}>แก้ไขข้อมูลส่วนตัว</Text>
                            </TouchableOpacity>

                            <View style={{ width: '120%', height: '80%', alignItems: 'center', backgroundColor: '#ffffff', paddingTop: 15 }} >

                                <Text style={{ color: '#3D3D3D', fontSize: 20 }}>ภาพรวมการออกกำลังกาย</Text>
                               

                                <Text style={{ color: '#3D3D3D', fontSize: 20 }}>ภาพรวมการออกกำลังกาย</Text>


                            </View>

                        </View>

                    </View>
                </ScrollView>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#3D3D3D",
        height: 50,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "#ffffff",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 5
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 20,
    },
    bodyContent: {

        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#69BD51",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 7,
        backgroundColor: "#69BD51",
    },
});
