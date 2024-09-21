import { useLocalSearchParams } from 'expo-router'
import { useState, useEffect } from 'react'
import { getColors, months } from '../lib/utils'
import { getGameDetails } from '../lib/metacritic'
import { Screen } from '../components/Screen'
import { Stack } from 'expo-router'
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  View,
  StyleSheet,
} from 'react-native'
import GameHero from '../components/GameHero'
import GameSubTitle from '../components/GameSubTitle'
import GamePlatforms from '../components/GamePlatforms'

export default function Detail() {
  const { gameslug } = useLocalSearchParams()
  const [gameInfo, setGameInfo] = useState(null)
  const bgRatingColor = gameInfo
    ? getColors({ score: gameInfo.score, maxScore: gameInfo.maxScore })
    : ''
  const [year, month, day] = gameInfo ? gameInfo.releaseDate?.split('-') : ''
  const formattedMonth = gameInfo ? months[Number(month)] : ''

  useEffect(() => {
    if (gameslug) {
      getGameDetails(gameslug).then(setGameInfo)
    }
  }, [gameslug])

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerLeft: () => {},
          headerRight: () => {},
          headerTintColor: '#ffbd40',
          headerTitle: gameInfo === null ? '' : gameInfo.title,
        }}
      />
      <View style={styles.container}>
        {gameInfo === null ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <ScrollView>
            <View style={styles.view}>
              <View style={styles.imgContainer}>
                <Image source={{ uri: gameInfo.img }} style={styles.img} />
              </View>
              <GameHero
                bgRatingColor={bgRatingColor}
                rating={gameInfo.rating}
                company={gameInfo.company}
              />
              <Text style={styles.title} className="text-black dark:text-white">
                {gameInfo.title}
              </Text>
              <Text
                style={styles.releaseDate}
                className={'text-black dark:text-white'}
              >
                <Text style={styles.releaseDateDescription}>Released On: </Text>
                {formattedMonth} {day}, {year}
              </Text>
              <GameSubTitle title={'All Platforms'} />
              {gameInfo.platforms.map(
                ({
                  id,
                  criticScoreSummary: { score, max, reviewCount },
                  name,
                }) => (
                  <GamePlatforms
                    key={id}
                    score={score}
                    max={max}
                    platform={name}
                    reviewCount={reviewCount}
                  />
                ),
              )}
              <GameSubTitle title={'Details'} />
              <Text
                style={styles.summary}
                className={'text-black dark:text-white'}
              >
                Summary
              </Text>
              <Text
                style={styles.description}
                className="text-black/70 dark:text-white/70"
              >
                {gameInfo.description}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    paddingHorizontal: 8,
  },
  imgContainer: {
    alignItems: 'center',
  },
  img: {
    borderRadius: 4,
    height: 294,
    marginVertical: 24,
    width: 214,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    lineHeight: 40,
  },
  releaseDate: {
    marginTop: 16,
  },
  releaseDateDescription: {
    fontWeight: '700',
  },
  summary: {
    fontWeight: '700',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 32,
    marginTop: 16,
    textAlign: 'left',
  },
})
