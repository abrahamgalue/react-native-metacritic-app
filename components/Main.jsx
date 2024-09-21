import { useState, useEffect } from 'react'
import { getLatestGames } from '../lib/metacritic'
import { Screen } from './Screen'
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native'
import { AnimatedGameCard } from './GameCard'
import GamesInfo from './GamesInfo'
import GamesExcludedInfo from './GamesExcludedInfo'

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
          style={styles.list}
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <>
              {index === 0 && <GamesInfo numOfGames={games.length} />}
              <AnimatedGameCard game={item} index={index} />
              {index === games.length - 1 && <GamesExcludedInfo />}
            </>
          )}
        />
      )}
    </Screen>
  )
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 8,
  },
})
