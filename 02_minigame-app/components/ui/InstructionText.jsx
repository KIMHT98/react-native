import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import React from "react";

export default function InstructionText({
  children,
  style,
}) {
  return (
    <Text style={[styles.instructuinText, style]}>
      {children}
    </Text>
  );
}
const styles = StyleSheet.create({
  instructuinText: {
    fontFamily: "open-sans",
    fontSize: 20,
    color: "white",
  },
});
