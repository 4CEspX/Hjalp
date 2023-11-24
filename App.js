import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [displayText, setDisplayText] = useState("Jonathan har en peniiiiiis");

  const handleButtonPress = () => {
    // Change the text when the button is pressed
    setDisplayText("jontes peniiiiis är liten!");
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: "red" }}>{displayText}</Text>
      <Button title="Press Me" onPress={handleButtonPress} />
      {/* You can change the title and functionality in onPress based on your requirement */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
