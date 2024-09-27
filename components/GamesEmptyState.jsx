import { View, Text, StyleSheet } from 'react-native'

function GamesEmptyState() {
  return (
    <View style={styles.noResultsView}>
      <Text
        className={'text-black dark:text-white'}
        style={styles.noResultsText}
      >
        Sorry, we don't have this video game, try searching with another one.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  noResultsView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  noResultsText: {
    textAlign: 'center',
  },
})

export default GamesEmptyState
