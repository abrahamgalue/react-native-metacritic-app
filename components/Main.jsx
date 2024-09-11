import { useState, useEffect } from 'react'
import { getLatestGames } from '../lib/metacritic'
import { Screen } from './Screen'
import { ActivityIndicator, FlatList, Text } from 'react-native'
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
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <>
              {index === 0 && (
                <Text className={'text-white/50 px-4 py-1'}>
                  {games.length} results
                </Text>
              )}
              <AnimatedGameCard game={item} index={index} />
            </>
          )}
        />
      )}
    </Screen>
  )
}
