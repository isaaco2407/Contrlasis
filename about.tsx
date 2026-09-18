import { StyleSheet, Text, View } from "react-native";

export default function about() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Us</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8C5CB3",
  },
  text: {
    fontFamily: "roboto",
    color: "#000",
    fontSize: 56,
    fontWeight: "bold",
  },
});
