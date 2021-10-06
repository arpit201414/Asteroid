import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView, Alert, ActivityIndicator } from "react-native";
import axios from "../api/axios";
import Button from "../components/button";

const GetAsteroid = ({ navigation }) => {
    const [asteroidID, setAsteroidID] = useState("");
    const [loading, setLoading] = useState(false);

    const callApi = async () => {
        try {
            setLoading(true)
            const response = await axios.get(`/neo/${asteroidID}`, {
                params: {
                    api_key: "LvbTyfBZPZA1bN8qknOUobZVUDIobM6cylmYEhBn"
                }
            })
            setLoading(false)
            console.log("submit-->>>>", response.data.name)
            let data = response.data
            navigation.navigate("AsteroidDetails", { data: data })
        } catch (error) {
            Alert.alert("Asteroid with this id not found.")
            console.log(error);
        }

    }

    const callRandomAsteroidApi = async () => {
        const response = await axios.get("/neo/browse", {
            params: {
                api_key: "LvbTyfBZPZA1bN8qknOUobZVUDIobM6cylmYEhBn"
            }
        })

        const items = response.data.near_earth_objects
        const prop = items[Math.floor(Math.random() * items.length)];

        console.log("ID--->>", prop.id);
        setAsteroidID(prop.id)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewStyle}>
                {loading ? <ActivityIndicator size="large" color="#FF5733" /> : null}
                <TextInput
                    style={styles.input}
                    placeholder="Enter Asteroid ID"
                    value={asteroidID}
                    onChangeText={(text) => setAsteroidID(text)}
                />
                <Button
                    disabled={asteroidID == ""}
                    title="Submit"
                    color={asteroidID == "" ? "#E5D9C8" : "#FF5733"}
                    onPress={callApi}
                />
                <Button
                    title="Random Asteroid"
                    color="#5131B1"
                    onPress={callRandomAsteroidApi}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        justifyContent: "center"
    },
    viewStyle: {
        marginHorizontal: 15,
    },
    input: {
        borderWidth: 1,
        height: 40,
        paddingLeft: 10,
        marginBottom: 15
    }
})

export default GetAsteroid;