import { Text, View } from 'react-native'

function SubTitleSlug({ title }) {
  return (
    <>
      <Text className={'text-white font-bold text-2xl mt-8'}>{title}</Text>
      <View
        style={{
          borderBottomColor: 'rgba(255, 255, 255, 0.7)',
          borderBottomWidth: 1,
          marginBottom: 24,
          marginTop: 10,
        }}
      />
    </>
  )
}

export default SubTitleSlug
