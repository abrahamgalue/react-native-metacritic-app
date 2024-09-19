import { View, Text, Platform } from 'react-native'
import { Score } from './Score'

function PlatformsSlug({ score, max, platform, reviewCount }) {
  return (
    <View
      style={{
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
      }}
      className={
        'bg-white dark:bg-neutral-900 rounded-md p-4 flex-row justify-between mx-2 mb-4'
      }
    >
      <View>
        <Text
          className={'text-black dark:text-white text-2xl flex-1 font-bold'}
        >
          {platform}
        </Text>
        <Text className={'text-black/70 dark:text-white/70'}>
          Based on {reviewCount} Critic Reviews
        </Text>
      </View>
      <Score score={score} maxScore={max} size={'larger'} />
    </View>
  )
}

export default PlatformsSlug
