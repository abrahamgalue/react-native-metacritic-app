import { Link, Stack } from 'expo-router'
import { View, Pressable } from 'react-native'
import { Logo } from '../components/Logo'
import { CircleInfoIcon } from '../components/Icons'

export default function Layout() {
  return (
    <View className="flex-1 bg-black">
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitle: '',
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link asChild href="/about" className="text-blue-400 text-xl">
              <Pressable>
                <CircleInfoIcon />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  )
}
