import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import React from "react";

export default function Subtitle({ children }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>
        {children}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",

    textAlign: "center",
  },
  subTitleContainer: {
    margin: 4,
    padding: 6,
    marginHorizontal: 24,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
