import { View } from 'react-native'

export function Screen({ children }) {
  return <View className="flex-1 bg-[#111] px-2">{children}</View>
}
