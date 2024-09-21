import { Screen } from '../../components/Screen'
import { ScrollView, Text, View, StyleSheet } from 'react-native'

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutTitle} className="dark:text-white text-2xl">
            Sobre el proyecto
          </Text>
          <Text style={styles.aboutDescription} className="dark:text-white/70">
            ¡Bienvenido a la app de los Juegos Mejor Calificados! Esta
            aplicación fue creada como un proyecto de aprendizaje usando React
            Native, con el objetivo de mostrar los videojuegos mejor valorados
            en Metacritic. Ya seas un jugador casual o un entusiasta dedicado,
            esta app te ofrece una manera fácil de explorar los mejores juegos,
            calificados por críticos y jugadores por igual.
          </Text>
          <Text style={styles.aboutDescription} className="dark:text-white/70">
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

const styles = StyleSheet.create({
  aboutContainer: {
    paddingHorizontal: 16,
  },
  aboutTitle: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    marginVertical: 32,
    textAlign: 'center',
  },
  aboutDescription: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
})
