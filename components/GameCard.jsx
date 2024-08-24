import { View, Image, Text, StyleSheet, Animated } from 'react-native'
import { useRef, useEffect } from 'react'

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

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      delay: index * 150,
      useNativeDriver: true,
    }).start()
  }, [opacity, index])

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
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
