import { Screen } from '../components/Screen'
import { Link, Stack } from 'expo-router'
import { Pressable } from 'react-native'
import { Logo } from '../components/Logo'
import { CircleInfoIcon } from '../components/Icons'

export default function Layout() {
  return (
    <Screen>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
          },
          contentStyle: {
            backgroundColor: '#000',
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
    </Screen>
  )
}
