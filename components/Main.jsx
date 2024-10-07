import { SplashScreen } from 'expo-router'
import { useState, useEffect } from 'react'
import { getLatestGames } from '../lib/metacritic'
import { Screen } from './Screen'
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'
import GamesSearch from './GamesSearch'
import GamesInfo from './GamesInfo'
import AnimatedGameCard from './GameCard'
import GamesExcludedInfo from './GamesExcludedInfo'
import GamesEmptyState from './GamesEmptyState'
import AsyncStorage from '@react-native-async-storage/async-storage'

SplashScreen.preventAutoHideAsync()

export function Main() {
  const [games, setGames] = useState([])
  const [text, setText] = useState('')

  useEffect(() => {
    const loadGames = async () => {
      try {
        const data = await AsyncStorage.getItem('games')
        const rawJson = data != null ? JSON.parse(data) : null

        if (rawJson) {
          setGames(rawJson)
        } else {
          try {
            const games = await getLatestGames()
            const gamesJsonValue = JSON.stringify(games)
            await AsyncStorage.setItem('games', gamesJsonValue)
            setGames(games)
          } catch (e) {
            console.error('There was an error fetching the latest games: ', e)
          }
        }
      } catch (e) {
        console.error('There was an error reading the data: ', e)
      } finally {
        setTimeout(() => SplashScreen.hideAsync(), 1300)
      }
    }

    loadGames()
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
