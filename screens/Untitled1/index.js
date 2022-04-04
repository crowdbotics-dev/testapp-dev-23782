import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled1 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <Text style={{
      left: 93,
      top: 108,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 15,
      fontSize: 10,
      borderRadius: 0,
      fontFamily: "inherit",
      color: "#d62020",
      fontWeight: 700,
      textAlign: "center",
      letterSpacing: 15
    }}>Text Spacing </Text></View>;
};

export default Untitled1;