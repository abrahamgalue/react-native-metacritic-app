import { View, Text } from 'react-native'

const getColors = ({ score, maxScore }) => {
  const percentage = (score / maxScore) * 100

  if (percentage < 40) return 'bg-[#ff6874]'
  if (percentage < 65) return 'bg-[#ffbd3f]'
  return 'bg-[#00ce7a]'
}

export function Score({ score, maxScore }) {
  const className = getColors({ score, maxScore })

  return (
    <View
      className={`${className} w-8 h-8 rounded-sm justify-center items-center`}
    >
      <Text className={'text-lg font-bold text-black'}>{score}</Text>
    </View>
  )
}
