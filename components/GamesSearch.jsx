import { useColorScheme } from 'nativewind'
import { View, TextInput, StyleSheet, Platform } from 'react-native'

function GamesSearch({ onChangeText }) {
  const { colorScheme } = useColorScheme()

  return (
    <View style={styles.inputView}>
      <TextInput
        className={'bg-white dark:bg-black dark:text-white'}
        cursorColor={'#ffbd40'}
        onChangeText={onChangeText}
        placeholder="Breath Of The Wild, Super Mario Odyssey..."
        placeholderTextColor={`${colorScheme === 'dark' ? '#eee' : '#bbb'}`}
        selectionColor={'#ffbd40'}
        style={{ ...styles.input }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputView: {
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
    borderRadius: 5,
    marginHorizontal: 1,
    marginVertical: 10,
    shadowColor: '#171717',
  },
  input: {
    borderRadius: 5,
    height: 40,
    padding: 10,
  },
})

export default GamesSearch
