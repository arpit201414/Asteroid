import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const AsteroidDetails = ({ route }) => {
    const receivedData = route.params.data
    console.log("receivedData-->>>>>", receivedData);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Name-- {receivedData.name}</Text>
                <Text style={styles.textStyle}>Nasa jpl url-- {receivedData.nasa_jpl_url}</Text>
                <Text style={styles.textStyle}>Is potentially hazardous asteroid-- {receivedData.is_potentially_hazardous_asteroid}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    viewStyle: {
        margin: 15,
    },
    textStyle: {
        fontSize: 18
    }
})

export default AsteroidDetails;