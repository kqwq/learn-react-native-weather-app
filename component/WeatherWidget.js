import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { WEATHER_API_KEY } from "../secrets";

const WeatherWidget = ({ lat, lon, city }) => {
  const [temperature, setTemperature] = useState(70);
  const [humidity, setHumidity] = useState(50);
  const [condition, setCondition] = useState("Sunny");
  let message = "";
  if (condition === "Raining") {
    message = "Bring an umbrella!";
  } else if (temperature > 80) {
    message = "Wear some sunscreen!";
  } else if (temperature < 55) {
    message = "Bring a jacket!";
  } else {
    message = "Nice day outside!";
  }

  // Get the actual weather
  async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    setTemperature(Math.round(data.main.temp * (9 / 5) - 459.67));
    setHumidity(data.main.humidity);
    setCondition(data.weather[0].main);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather in {city}</Text>
      <Text>Temperature: {temperature}&deg;</Text>
      <Text>humidity: {humidity}%</Text>
      <Text>Condition: {condition}</Text>
      <Text style={styles.message}>{message}</Text>
      <Button title="Get Weather" onPress={getWeather} />
    </View>
  );
};

export default WeatherWidget;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  message: {
    fontSize: 17,
    fontStyle: "italic",
  },
});
