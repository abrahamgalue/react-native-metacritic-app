import { Screen } from '../components/Screen'
import { Pressable, ScrollView, Text } from 'react-native'
import { Link } from 'expo-router'
import { styled } from 'nativewind'
import { HomeIcon } from '../components/Icons'
const StyledPressable = styled(Pressable)

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href="/" className="text-blue-400 text-xl">
          <StyledPressable className="active:opacity-50">
            <HomeIcon />
          </StyledPressable>
        </Link>

        <Text className="text-white font-bold mb-8 text-2xl">
          Sobre el proyecto
        </Text>
        <Text className="text-white text-white/90 mb-4">
          lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem
          ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum,
        </Text>
        <Text className="text-white text-white/90 mb-4">
          lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem
          ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum,
        </Text>
        <Text className="text-white text-white/90 mb-4">
          lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem
          ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum,
        </Text>
        <Text className="text-white text-white/90 mb-4">
          lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem
          ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum,
        </Text>
      </ScrollView>
    </Screen>
  )
}
