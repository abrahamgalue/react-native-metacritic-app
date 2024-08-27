import { Screen } from '../../components/Screen'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { Link } from 'expo-router'
import { styled } from 'nativewind'
import { HomeIcon } from '../../components/Icons'
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

        <View className="px-4">
          <Text className="text-white text-center font-bold mb-8 mt-8 text-2xl">
            Sobre el proyecto
          </Text>
          <Text className="text-white/70 mb-4 text-base">
            ¡Bienvenido a la app de los Juegos Mejor Calificados! Esta
            aplicación fue creada como un proyecto de aprendizaje usando React
            Native, con el objetivo de mostrar los videojuegos mejor valorados
            en Metacritic. Ya seas un jugador casual o un entusiasta dedicado,
            esta app te ofrece una manera fácil de explorar los mejores juegos,
            calificados por críticos y jugadores por igual.
          </Text>
          <Text className="text-white/70 mb-4 text-base">
            Esta app representa un hito en mi camino como desarrollador,
            combinando mi pasión por los videojuegos con mi deseo de aprender y
            crecer en el mundo del desarrollo de aplicaciones. ¡Espero que
            disfrutes usándola tanto como yo disfruté creándola!
          </Text>
        </View>
      </ScrollView>
    </Screen>
  )
}
