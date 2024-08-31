import {
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import Colors from "../../constants/colors";

export default function Card({ children }) {
  return (
    <View style={styles.inputContainer}>
      {children}
    </View>
  );
}
const deviceWidth =
  Dimensions.get("window").width;
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 32 : 50,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
