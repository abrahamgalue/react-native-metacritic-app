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
    <View className={'flex-row items-center'}>
      <View
        className={`${className} w-6 h-6 rounded-sm justify-center items-center`}
      >
        <Text className={'text-xs font-black text-black'}>{score}</Text>
      </View>
      <Text className={'text-xs text-white/80 ml-3'}>Metascore</Text>
    </View>
  )
}
