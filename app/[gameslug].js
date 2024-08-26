import { useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { getGameDetails } from '../lib/metacritic'
import { Screen } from '../components/Screen'
import { Stack } from 'expo-router'
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native'
import { Score } from '../components/Score'

export default function Detail() {
  const { gameslug } = useLocalSearchParams()
  const [gameInfo, setGameInfo] = useState(null)

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
            <View className="justify-center items-center text-center">
              <Image
                className="mb-4 mt-24 rounded"
                source={{ uri: gameInfo.img }}
                style={{ width: 214, height: 294 }}
              />
              <Score score={gameInfo.score} maxScore={100} />
              <Text className="text-white text-center font-bold text-xl">
                {gameInfo.title}
              </Text>
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
