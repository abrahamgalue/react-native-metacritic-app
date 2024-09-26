import { useState, useEffect } from 'react'
import { getLatestGames } from '../lib/metacritic'
import { Screen } from './Screen'
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TextInput,
  View,
  Platform,
  Text,
} from 'react-native'
import { AnimatedGameCard } from './GameCard'
import GamesInfo from './GamesInfo'
import GamesExcludedInfo from './GamesExcludedInfo'
import { useColorScheme } from 'nativewind'

export function Main() {
  const { colorScheme } = useColorScheme()
  const [games, setGames] = useState([])
  const [text, setText] = useState('')

  useEffect(() => {
    getLatestGames().then((games) => setGames(games))
  }, [])

  const sortedGames = text
    ? [...games].filter((game) =>
        game.title.toLowerCase().includes(text.toLowerCase()),
      )
    : games

  return (
    <Screen>
      {sortedGames.length === 0 && text === '' ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          ListHeaderComponent={
            <>
              <View style={styles.inputView}>
                <TextInput
                  className={'bg-white dark:bg-black dark:text-white'}
                  cursorColor={'#ffbd40'}
                  onChangeText={(newText) => setText(newText)}
                  placeholder="Breath Of The Wild, Super Mario Odyssey..."
                  placeholderTextColor={`${colorScheme === 'dark' ? '#eee' : '#bbb'}`}
                  selectionColor={'#ffbd40'}
                  style={{ ...styles.input }}
                />
              </View>
              {sortedGames.length === 0 && text !== '' ? (
                <View style={styles.noResultsView}>
                  <Text
                    className={'text-black dark:text-white'}
                    style={styles.noResultsText}
                  >
                    Sorry, we don't have this video game, try searching with
                    another one.
                  </Text>
                </View>
              ) : (
                <GamesInfo numOfGames={sortedGames.length} />
              )}
            </>
          }
          // Solo mostrar GamesExcludedInfo si hay resultados
          ListFooterComponent={
            sortedGames.length !== 0 && <GamesExcludedInfo />
          }
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
  inputView: {
    shadowColor: '#171717',
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
    marginHorizontal: 1,
    marginVertical: 10,
    borderRadius: 5,
  },
  input: {
    height: 40,
    padding: 10,
    borderRadius: 5,
  },
  noResultsView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  noResultsText: {
    textAlign: 'center',
  },
})
