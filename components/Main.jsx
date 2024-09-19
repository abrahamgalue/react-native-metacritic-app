import { useState, useEffect } from 'react'
import { getLatestGames } from '../lib/metacritic'
import { Screen } from './Screen'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { AnimatedGameCard } from './GameCard'

export function Main() {
  const [games, setGames] = useState([])

  useEffect(() => {
    getLatestGames().then((games) => setGames(games))
  }, [])

  return (
    <Screen>
      {games.length === 0 ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          className="px-2"
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <>
              {index === 0 && (
                <View className={'px-4 py-1'}>
                  <View>
                    <Text
                      className={
                        'text-black/80 dark:text-white/80 font-extrabold text-xl pt-4 pb-2'
                      }
                    >
                      Best Games of All Time
                    </Text>
                    <Text className={'text-black/50 dark:text-white/50 pb-8'}>
                      Find your next game for any platform.
                    </Text>
                  </View>
                  <Text className={'text-black/30 dark:text-white/30'}>
                    {games.length} results
                  </Text>
                </View>
              )}
              <AnimatedGameCard game={item} index={index} />
              {index === games.length - 1 && (
                <Text
                  className={
                    'text-black/90 dark:text-white/90 mb-8 text-center italic'
                  }
                >
                  Titles with fewer than 7 critic reviews are excluded.
                </Text>
              )}
            </>
          )}
        />
      )}
    </Screen>
  )
}
