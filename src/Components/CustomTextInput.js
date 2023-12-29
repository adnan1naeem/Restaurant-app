import { TextInput,View, StyleSheet, Text } from "react-native";
import React from "react";
import { Colors } from "../Utils/Colors";
import { Fonts } from "./fonts";

const index = ({
    placeholderText,
    multiLine,
    headingTitleStyle,
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
        <View>
            <Text style={[styles.title,headingTitleStyle]}>{heading}</Text>
            <TextInput
                onSubmitEditing={onSubmitEditing}
                placeholder={placeholderText}
                placeholderTextColor={
                    placeholderTextColor ? placeholderTextColor : Colors.black
                }
                style={[styles.inputContainer,inputTextStyle]}
                multiline={multiLine}
                value={value}
                selectionColor={Colors.Pink}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                editable={iseditable ? false : true}
                maxLength={maxlength ? maxlength : null}
                numberOfLines={numberOfLines}
            />
        </View>
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