import { useLocalSearchParams } from 'expo-router'
import { useState, useEffect } from 'react'
import { getColors, months } from '../lib/utils'
import { getGameDetails } from '../lib/metacritic'
import { Screen } from '../components/Screen'
import { Stack } from 'expo-router'
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native'
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
      <View className="justify-center items-center">
        {gameInfo === null ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <ScrollView>
            <View>
              <View className={'items-center'}>
                <Image
                  className="my-6 rounded"
                  source={{ uri: gameInfo.img }}
                  style={{ width: 214, height: 294 }}
                />
              </View>
              <GameHero
                bgRatingColor={bgRatingColor}
                rating={gameInfo.rating}
                company={gameInfo.company}
              />
              <Text className="text-white font-bold text-4xl">
                {gameInfo.title}
              </Text>
              <Text className={'text-white mt-4'}>
                <Text className={'font-bold'}>Released On: </Text>
                {formattedMonth} {day}, {year}
              </Text>
              <GameSubTitle ttle={'All Platforms'} />
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
              <Text className={'text-white font-bold'}>Summary</Text>
              <Text className="text-white/70 mt-4 text-left mb-8 text-base">
                {gameInfo.description}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  )
}
