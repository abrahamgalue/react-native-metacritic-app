import { View, Text, StyleSheet } from 'react-native'

export default function GamesInfo({ numOfGames }) {
  return (
    <View>
      <View>
        <Text
          style={styles.infoTitle}
          className={'text-black/80 dark:text-white/80'}
        >
          Best Games of All Time
        </Text>
        <Text
          style={styles.infoDescription}
          className={'text-black/50 dark:text-white/50'}
        >
          Find your next game for any platform.
        </Text>
      </View>
      <Text className={'text-black/30 dark:text-white/30'}>
        {numOfGames} results
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  infoTitle: {
    fontSize: 20,
    fontWeight: '800',
    lineHeight: 28,
    paddingBottom: 8,
    paddingTop: 16,
  },
  infoDescription: {
    paddingBottom: 32,
  },
})
