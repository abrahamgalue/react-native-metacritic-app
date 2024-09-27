import { useState, useEffect } from 'react'
import { getLatestGames } from '../lib/metacritic'
import { Screen } from './Screen'
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'
import GamesSearch from './GamesSearch'
import GamesInfo from './GamesInfo'
import AnimatedGameCard from './GameCard'
import GamesExcludedInfo from './GamesExcludedInfo'
import GamesEmptyState from './GamesEmptyState'

export function Main() {
  const [games, setGames] = useState([])
  const [text, setText] = useState('')

  useEffect(() => {
    getLatestGames().then((games) => setGames(games))
  }, [])

  function handleChangeText(text) {
    setText(text)
  }

  const sortedGames = text
    ? [...games].filter((game) =>
        game.title.toLowerCase().includes(text.toLowerCase()),
      )
    : games
  const noGames = sortedGames.length === 0

  return (
    <Screen>
      {noGames && text === '' ? (
        <View style={styles.loadingIndicator}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <FlatList
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          ListHeaderComponent={
            <>
              <GamesSearch onChangeText={handleChangeText} />
              {noGames && text !== '' ? (
                <GamesEmptyState />
              ) : (
                <GamesInfo numOfGames={sortedGames.length} />
              )}
            </>
          }
          ListFooterComponent={!noGames && <GamesExcludedInfo />}
          style={styles.list}
          data={sortedGames}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
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
  loadingIndicator: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})
