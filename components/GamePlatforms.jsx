import { View, Text } from 'react-native'
import { Score } from './Score'

function PlatformsSlug({ score, max, platform, reviewCount }) {
  return (
    <View
      className={'bg-neutral-900 rounded-md p-4 flex-row justify-between mb-4'}
    >
      <View>
        <Text className={'text-white text-2xl flex-1 font-bold'}>
          {platform}
        </Text>
        <Text className={'text-white/70'}>
          Based on {reviewCount} Critic Reviews
        </Text>
      </View>
      <Score score={score} maxScore={max} size={'larger'} />
    </View>
  )
}

export default PlatformsSlug
