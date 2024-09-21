import { View, Text, StyleSheet } from 'react-native'

function GameHero({ bgRatingColor, rating, company }) {
  return (
    <View style={{ backgroundColor: bgRatingColor, ...styles.container }}>
      <Text style={{ ...styles.text, ...styles.textBold }}>{rating}</Text>
      <Text style={{ ...styles.text, ...styles.symbolSpace }}> • </Text>
      <Text style={{ ...styles.text, ...styles.textBold }}>{company}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 6,
    flexDirection: 'row',
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  text: {
    color: '#404040',
  },
  textBold: {
    fontWeight: '700',
  },
  symbolSpace: {
    marginHorizontal: 4,
  },
})

export default GameHero
