import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const handleButtonPress = () => {
    // Functionality to be executed on button press
    console.log("Button Pressed!");
    // You can add your desired logic here
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: "red" }}>Jonathan har en peniiiiiis</Text>
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
