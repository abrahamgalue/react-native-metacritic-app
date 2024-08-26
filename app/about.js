import { Link } from 'expo-router'
import { ScrollView, Text } from 'react-native'

export default function About() {
  return (
    <ScrollView>
      <Link href="/" className="text-blue-400 text-xl">
        Ir a la pagina principal
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
  )
}
