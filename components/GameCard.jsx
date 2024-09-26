import {
  View,
  Image,
  Text,
  StyleSheet,
  Animated,
  Pressable,
  Platform,
} from 'react-native'
import { useRef, useEffect } from 'react'
import { Score } from './Score'
import { Link } from 'expo-router'
import { styled } from 'nativewind'
import { months } from '../lib/utils'
import { useColorScheme } from 'nativewind'
import { memo } from 'react'

const StyledPressable = styled(Pressable)

function GameCard({ game, index }) {
  const { colorScheme } = useColorScheme()
  const [year, month, day] = game.releaseDate.split('-')
  const formattedMonth = months[Number(month)]

  return (
    <Link asChild href={`/${game.slug}`}>
      <StyledPressable
        style={styles.card}
        className={`dark:border ${colorScheme === 'dark' && 'active:border-white/50'} bg-white dark:bg-black ${index === 0 && 'mt-2'}`}
      >
        <View key={game.slug} style={styles.cardContainer}>
          <Image source={{ uri: game.image }} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text
              className={'text-black dark:text-white'}
              style={{ ...styles.infoTitle }}
            >
              {index + 1}. {game.title}
            </Text>
            <View style={styles.infoDateAndRateContainer}>
              <Text
                style={styles.infoDateAndRate}
                className={'text-black/80 dark:text-white/80'}
              >
                {formattedMonth} {day}, {year}
              </Text>
              <Text
                style={styles.infoDateAndRate}
                className={'text-black/80 dark:text-white/80'}
              >
                {' '}
                •{' '}
              </Text>
              <Text
                style={styles.infoDateAndRate}
                className={'text-black/80 dark:text-white/80'}
              >
                Rated {game.rating}
              </Text>
            </View>
            <Text
              className={'text-black/80 dark:text-white/80'}
              style={{ ...styles.infoDescription }}
            >
              {game.description.slice(0, 57)}...
            </Text>
            <Score score={game.score} maxScore={100} size={'normal'} />
          </View>
        </View>
      </StyledPressable>
    </Link>
  )
}

function AnimatedGameCard({ game, index }) {
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

export default memo(AnimatedGameCard)

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    marginBottom: 28,
    marginHorizontal: 2,
    padding: 12,
    shadowColor: '#171717',
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  cardContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  image: {
    borderRadius: 10,
    height: 147,
    width: 107,
  },
  infoContainer: {
    flexShrink: 1,
  },
  infoTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 10,
  },
  infoDateAndRateContainer: {
    flexDirection: 'row',
  },
  infoDateAndRate: {
    fontSize: 10,
  },
  infoDescription: {
    fontSize: 14,
    marginVertical: 8,
  },
})
