import { View, Image, Text, StyleSheet, Animated } from 'react-native'
import { useRef, useEffect } from 'react'
import { Score } from './Score'

export function GameCard({ game }) {
  return (
    <View
      key={game.slug}
      className={'flex-row bg-gray-500/10 p-4 rounded-xl gap-4 mb-10'}
    >
      <Image source={{ uri: game.image }} style={styles.image} />
      <View>
        <Text className={'mb-1'} style={{ ...styles.title, ...styles.text }}>
          {game.title}
        </Text>
        <Score score={game.score} maxScore={100} />
        <Text
          className={'mt-2'}
          style={{ ...styles.description, ...styles.text }}
        >
          {game.description.slice(0, 100)}...
        </Text>
      </View>
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
