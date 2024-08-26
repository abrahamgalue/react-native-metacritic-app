import { useState, useEffect } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { getLatestGames } from '../lib/metacritic'
import { View, ActivityIndicator, FlatList, Pressable } from 'react-native'
import { Logo } from './Logo'
import { Link } from 'expo-router'
import { CircleInfoIcon } from './Icons'
import { AnimatedGameCard } from './GameCard'

export function Main() {
  const [games, setGames] = useState([])
  const insets = useSafeAreaInsets()

  useEffect(() => {
    getLatestGames().then((games) => setGames(games))
  }, [])

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View className="flex-row justify-between items-center mb-4 mx-2">
        <View>
          <Logo />
        </View>

        <Link asChild href="/about" className="text-blue-400 text-xl">
          <Pressable>
            <CircleInfoIcon />
          </Pressable>
        </Link>
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
