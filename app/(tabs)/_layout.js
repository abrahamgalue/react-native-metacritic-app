import { Tabs } from 'expo-router'
import { HomeIcon, InfoIcon } from '../../components/Icons'
import { useColorScheme } from 'nativewind'

export default function TabsLayout() {
  const { colorScheme } = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
        },
        tabBarActiveTintColor: '#ffbd40',
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => <InfoIcon color={color} />,
        }}
      />
    </Tabs>
  )
}
