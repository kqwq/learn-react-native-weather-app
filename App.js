import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WeatherWidget from "./component/WeatherWidget";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Around the World</Text>
      <StatusBar style="auto" />

      <WeatherWidget city="Miami" lat={25.76} lon={-80.19} />
      <WeatherWidget city="Orlando" lat={28.54} lon={-81.38} />
      <WeatherWidget city="Tampa" lat={27.95} lon={-82.46} />
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
