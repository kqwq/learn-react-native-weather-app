import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WeatherWidget from "./component/WeatherWidget";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Around the World</Text>
      <StatusBar style="auto" />

      <WeatherWidget city="Catharpin" lat={38.85} lon={-77.57} />
      <WeatherWidget city="Catharpin" lat={38.85} lon={-77.57} />
      <WeatherWidget city="Catharpin" lat={38.85} lon={-77.57} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
});
