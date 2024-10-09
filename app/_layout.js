import { useColorScheme } from 'nativewind'
import { useEffect } from 'react'
import { Link, SplashScreen, Stack } from 'expo-router'
import { View, Pressable } from 'react-native'
import { Logo } from '../components/Logo'
import { DarkModeIcon, LightModeIcon } from '../components/Icons'

SplashScreen.preventAutoHideAsync()

export default function Layout() {
  const { colorScheme, toggleColorScheme } = useColorScheme()

  useEffect(() => {
    setTimeout(() => SplashScreen.hideAsync(), 1300)
  }, [])

  return (
    <View className="flex-1 bg-white dark:bg-[#111]">
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
          },
          headerTitle: '',
          headerLeft: () => (
            <Link asChild href="/">
              <Pressable>
                <Logo textColor={colorScheme === 'dark' ? 'white' : 'black'} />
              </Pressable>
            </Link>
          ),
          headerRight: () => (
            <Pressable onPress={toggleColorScheme}>
              {colorScheme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </Pressable>
          ),
        }}
      />
    </View>
  )
}
