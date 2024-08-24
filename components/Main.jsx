import { useState, useEffect } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { getLatestGames } from '../lib/metacritic'
import { View, ActivityIndicator, FlatList } from 'react-native'
import { Logo } from './Logo'
import { AnimatedGameCard } from './GameCard'

export function Main() {
  const [games, setGames] = useState([])
  const insets = useSafeAreaInsets()

  useEffect(() => {
    getLatestGames().then((games) => setGames(games))
  }, [])

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={{ marginBottom: 20 }}>
        <Logo />
      </View>
      {games.length === 0 ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </View>
  )
}
