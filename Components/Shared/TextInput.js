import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../Config/colors";

function AppTextInput({
  icon,
  multiline = false,
  width = "100%",
  ...otherProps
}) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={30}
          style={styles.icon}
          color={colors.primary}
        />
      )}
      <TextInput
        multiline={multiline}
        style={[styles.textInput]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    flexDirection: "row",
    padding: 15,
    margin: 10,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    justifyContent: "center",
    width: "100%",
  },
});

export default AppTextInput;
