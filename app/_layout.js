import { Link, Stack } from 'expo-router'
import { View, Pressable } from 'react-native'
import { Logo } from '../components/Logo'

export default function Layout() {
  return (
    <View className="flex-1 bg-[#111]">
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitle: '',
          headerLeft: () => (
            <Link asChild href="/">
              <Pressable>
                <Logo />
              </Pressable>
            </Link>
          ),
          // headerRight: () => (
          //   <Link asChild href="/about" className="text-blue-400 text-xl">
          //     <Pressable>
          //
          //     </Pressable>
          //   </Link>
          // ),
        }}
      />
    </View>
  )
}
