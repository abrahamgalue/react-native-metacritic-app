import { View } from 'react-native'

export function Screen({ children }) {
  return <View className="flex-1 bg-white dark:bg-[#111]">{children}</View>
}
