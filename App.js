import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Text } from "react-native";
import { getLatestGames } from "./lib/metacritic";
import { useEffect, useState } from "react";

export default function App() {
  const [games, setGames] = useState(null);

  useEffect(() => {
    getLatestGames().then((games) => setGames(games));
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {games.map((game) => (
        <View key={game.slug} style={styles.card}>
          <Image source={{ uri: game.image }} style={styles.image} />
          <Text style={(styles.title, styles.text)}>{game.title}</Text>
          <Text style={(styles.description, styles.text)}>
            {game.description}
          </Text>
          <Text style={styles.score}>{game.score}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#eee",
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginTop: 10,
  },
  text: {
    color: "#fff",
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
});
