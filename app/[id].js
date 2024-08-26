import { Screen } from '../components/Screen'
import { Link, Stack } from 'expo-router'
import { Text, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

export default function Detail() {
  const { id } = useLocalSearchParams()

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerLeft: () => {},
          headerRight: () => {},
          headerTintColor: '#ffbd40',
          headerTitle: 'The legend of zelda: breath of the wild',
        }}
      />
      <View>
        <Text className="text-white font-bold mb-8 text-2xl">
          Detalle del juego {id}
        </Text>
        <Link href="/" className="text-blue-500">
          Volver atras
        </Link>
      </View>
    </Screen>
  )
}
