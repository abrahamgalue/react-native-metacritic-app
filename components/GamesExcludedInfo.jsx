import { Text, StyleSheet } from 'react-native'

export default function GamesExcludedInfo() {
  return (
    <Text
      style={styles.infoFooter}
      className={'text-black/90 dark:text-white/90'}
    >
      Titles with fewer than 7 critic reviews are excluded.
    </Text>
  )
}

const styles = StyleSheet.create({
  infoFooter: {
    fontStyle: 'italic',
    marginBottom: 32,
    textAlign: 'center',
  },
})
