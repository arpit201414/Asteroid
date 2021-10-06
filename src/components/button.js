import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Button = ({ title, onPress, color, style, disabled }) => {
    return (
        <View>
            <TouchableOpacity
                disabled={disabled}
                onPress={onPress} style={[styles.buttonStyles, style, { backgroundColor: color }]} >
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonStyles: {
        marginTop: 25,
        borderWidth: 1,
        borderColor: "#9C9593",
        alignItems: "center",
        height: 40,
        justifyContent: "center",
        marginHorizontal: 10,
        borderRadius: 10
    },
    text: {
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default Button;