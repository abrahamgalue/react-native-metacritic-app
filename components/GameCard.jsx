import { View, Image, Text, StyleSheet } from 'react-native'

export function GameCard({ game }) {
  return (
    <View key={game.slug} style={styles.card}>
      <Image source={{ uri: game.image }} style={styles.image} />
      <Text style={{ ...styles.title, ...styles.text }}>{game.title}</Text>
      <Text style={styles.score}>{game.score}</Text>
      <Text style={{ ...styles.description, ...styles.text }}>
        {game.description}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 42,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#eee',
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,
  },
  text: {
    color: '#fff',
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
})
