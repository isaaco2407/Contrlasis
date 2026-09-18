import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contrlasis!</Text>
      <Link href="/about" style={styles.button}>
        Go to About Us
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ffff",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#34ffff",
  },
  text: {
    fontSize: 55,
    fontWeight: "bold",
    color: "#0f35dff6",
  },
});
