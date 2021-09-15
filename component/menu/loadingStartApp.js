import React from "react";
import { ActivityIndicator, StyleSheet, Text, View, Image } from "react-native";

const LoadingStartApp = () => (
    <View style={styles.container}>
        <View style={{alignItems:'center',marginBottom:20}}>
            <Image
                source={require('../../img/Since1992.png')}
                style={{ width: 300, height: 300, margin: 0, }}
            />
        </View>
        <View style={{alignItems:'center'}}>
            <ActivityIndicator size='large' color="#69BD51" />
        </View>

    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        flexDirection: 'column',

        backgroundColor: '#292B2D'
    },

});

export default LoadingStartApp;