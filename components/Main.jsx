/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react'
import { getLatestGames } from '../lib/metacritic'
import { View, ScrollView, ActivityIndicator } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { GameCard } from './GameCard'

export function Main() {
  const [games, setGames] = useState([])
  const insets = useSafeAreaInsets()

  useEffect(() => {
    getLatestGames().then(games => setGames(games))
  }, [])

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      {games.length === 0 ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <ScrollView>
          {games.map(game => (
            <GameCard key={game.slug} game={game} />
          ))}
        </ScrollView>
      )}
    </View>
  )
}
