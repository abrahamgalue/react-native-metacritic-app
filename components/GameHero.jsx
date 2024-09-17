import { View, Text } from 'react-native'

function GameHero({ bgRatingColor, rating, company }) {
  return (
    <View
      style={{ backgroundColor: bgRatingColor }}
      className={`rounded-md flex-row items-center px-4 py-5 mb-5`}
    >
      <Text className="text-neutral-700 font-bold">{rating}</Text>
      <Text className={'text-neutral-700 mx-1'}> • </Text>
      <Text className="text-neutral-700 font-bold">{company}</Text>
    </View>
  )
}

export default GameHero
