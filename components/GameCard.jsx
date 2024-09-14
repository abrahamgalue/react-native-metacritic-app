import {
  View,
  Image,
  Text,
  StyleSheet,
  Animated,
  Pressable,
} from 'react-native'
import { useRef, useEffect } from 'react'
import { Score } from './Score'
import { Link } from 'expo-router'
import { styled } from 'nativewind'
import { months } from '../lib/utils'

const StyledPressable = styled(Pressable)

export function GameCard({ game, index }) {
  const [year, month, day] = game.releaseDate.split('-')
  const formattedMonth = months[Number(month)]

  return (
    <Link asChild href={`/${game.slug}`}>
      <StyledPressable
        className={`border active:border-white/50 mb-7 bg-black rounded-xl p-4 ${index === 0 ? 'mt-2' : null}`}
      >
        <View key={game.slug} className={'flex-row gap-4'}>
          <Image source={{ uri: game.image }} style={styles.image} />
          <View className="flex-shrink">
            <Text
              className={'mb-1'}
              style={{ ...styles.title, ...styles.text }}
            >
              {index + 1}. {game.title}
            </Text>
            <View className="flex-row">
              <Text style={styles.date} className={'text-white/80'}>
                {formattedMonth} {day}, {year}
              </Text>
              <Text style={styles.date} className={'text-white/80'}>
                {' '}
                •{' '}
              </Text>
              <Text style={styles.date} className={'text-white/80'}>
                Rated {game.rating}
              </Text>
            </View>
            <Text className={'my-2'} style={{ ...styles.description }}>
              {game.description.slice(0, 57)}...
            </Text>
            <Score score={game.score} maxScore={100} size={'normal'} />
          </View>
        </View>
      </StyledPressable>
    </Link>
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
      <GameCard game={game} index={index} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 42,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  date: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 10,
  },
  description: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
  },
  score: {
    color: 'green',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: '#fff',
  },
  image: {
    borderRadius: 10,
    height: 147,
    width: 107,
  },
})
