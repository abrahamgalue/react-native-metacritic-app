import { View, Text, StyleSheet } from 'react-native'
import { getColors } from '../lib/utils'

export function Score({ score, maxScore, size }) {
  const bgColor = getColors({ score, maxScore })
  const fontSize = size === 'normal' ? 'text-xs' : 'text-[30px]'
  const boxSize = size === 'normal' ? 'w-6 h-6' : 'w-16 h-16'

  return (
    <View style={styles.scoreContainer}>
      <View
        style={{
          backgroundColor: bgColor,
          ...styles.scoreBox,
        }}
        className={`${boxSize}`}
      >
        <Text style={styles.scoreValue} className={`${fontSize}`}>
          {score}
        </Text>
      </View>
      {size === 'normal' && (
        <Text
          style={styles.scoreText}
          className={' text-black/80 dark:text-white/80'}
        >
          Metascore
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  scoreContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  scoreBox: {
    alignItems: 'center',
    borderRadius: 6,
    justifyContent: 'center',
  },
  scoreValue: {
    color: '#000000',
    fontWeight: '900',
  },
  scoreText: {
    fontSize: 12,
    ineHeight: 16,
    marginLeft: 12,
  },
})
