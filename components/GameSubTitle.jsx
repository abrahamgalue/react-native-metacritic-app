import { StyleSheet, Text, View } from 'react-native'
import { useColorScheme } from 'nativewind'

function SubTitleSlug({ title }) {
  const { colorScheme } = useColorScheme()

  return (
    <>
      <Text style={styles.title} className={'text-black dark:text-white'}>
        {title}
      </Text>
      <View
        style={{
          borderBottomColor:
            colorScheme === 'dark'
              ? 'rgba(255, 255, 255, 0.7)'
              : 'rgba(0, 0, 0, 0.7)',
          ...styles.lineHeight,
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    marginTop: 32,
  },
  lineHeight: {
    borderBottomWidth: 1,
    marginBottom: 24,
    marginTop: 10,
  },
})

export default SubTitleSlug
