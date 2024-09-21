import { View, Text, Platform, StyleSheet } from 'react-native'
import { Score } from './Score'

function PlatformsSlug({ score, max, platform, reviewCount }) {
  return (
    <View style={styles.box} className={'bg-white dark:bg-neutral-900'}>
      <View>
        <Text
          style={styles.platform}
          className={'text-black dark:text-white flex-1'}
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

const styles = StyleSheet.create({
  box: {
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginHorizontal: 8,
    padding: 16,
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
  },
  platform: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
  },
})

export default PlatformsSlug
