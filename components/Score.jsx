import { View, Text } from 'react-native'
import { getColors } from '../lib/utils'

export function Score({ score, maxScore, size }) {
  const bgColor = getColors({ score, maxScore })
  const fontSize = size === 'normal' ? 'text-xs' : 'text-[30px]'
  const boxSize = size === 'normal' ? 'w-6 h-6' : 'w-16 h-16'

  return (
    <View className={'flex-row items-center'}>
      <View
        style={{
          backgroundColor: bgColor,
        }}
        className={`${boxSize} rounded-md items-center justify-center`}
      >
        <Text className={`${fontSize} font-black text-black`}>{score}</Text>
      </View>
      {size === 'normal' && (
        <Text className={'text-xs text-black/80 dark:text-white/80 ml-3'}>
          Metascore
        </Text>
      )}
    </View>
  )
}
