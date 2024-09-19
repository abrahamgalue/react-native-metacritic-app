import { Text, View } from 'react-native'
import { useColorScheme } from 'nativewind'

function SubTitleSlug({ title }) {
  const { colorScheme } = useColorScheme()

  return (
    <>
      <Text className={'text-black dark:text-white font-bold text-2xl mt-8'}>
        {title}
      </Text>
      <View
        style={{
          borderBottomColor:
            colorScheme === 'dark'
              ? 'rgba(255, 255, 255, 0.7)'
              : 'rgba(0, 0, 0, 0.7)',
          borderBottomWidth: 1,
          marginBottom: 24,
          marginTop: 10,
        }}
      />
    </>
  )
}

export default SubTitleSlug
