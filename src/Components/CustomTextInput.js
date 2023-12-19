import { TextInput, StyleSheet, Text } from "react-native";
import React from "react";
import { Colors } from "../Utils/Colors";
import { Fonts } from "./fonts";

const index = ({
    placeholderText,
    multiLine,
    placeholderTextColor,
    inputTextStyle,
    keyboardType,
    onChangeText,
    value,
    iseditable,
    maxlength,
    numberOfLines,
    onSubmitEditing,
    heading
}) => {
    return (
        <>
            <Text style={styles.title}>{heading}</Text>
            <TextInput
                onSubmitEditing={onSubmitEditing}
                placeholder={placeholderText}
                placeholderTextColor={
                    placeholderTextColor ? placeholderTextColor : Colors.black
                }
                style={inputTextStyle ? inputTextStyle : styles.inputContainer}
                multiline={multiLine}
                value={value}
                selectionColor={Colors.Pink}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                editable={iseditable ? false : true}
                maxLength={maxlength ? maxlength : null}
                numberOfLines={numberOfLines}
            />
        </>
    );
};

export default index;

const styles = StyleSheet.create({
    inputContainer: {
        fontSize: 20,
        color: Colors.black,
        backgroundColor: Colors.light_pink,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 30
    },
    title: {
        fontFamily: Fonts.regular,
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontSize: 16
    }
})