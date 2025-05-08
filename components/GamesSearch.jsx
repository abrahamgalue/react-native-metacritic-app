import { useColorScheme } from 'nativewind'
import { View, TextInput, StyleSheet, Platform } from 'react-native'
import { SearchIcon } from './Icons'

function GamesSearch({ onChangeText }) {
  const { colorScheme } = useColorScheme()

  return (
    <View
      style={{
        ...styles.inputView,
        backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
      }}
    >
      <SearchIcon
        style={styles.icon}
        color={colorScheme === 'dark' ? '#fff' : '#000'}
      />
      <TextInput
        cursorColor={'#ffbd40'}
        onChangeText={onChangeText}
        placeholder="Breath Of The Wild, Super Mario Odyssey..."
        placeholderTextColor={colorScheme === 'dark' ? '#bbb' : '#666'}
        selectionColor={'#ffbd40'}
        style={{
          ...styles.input,
          color: colorScheme === 'dark' ? '#fff' : '#000',
          backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowColor: '#000',
      },
      android: {
        elevation: 4,
      },
    }),
    borderRadius: 8,
    marginHorizontal: 10,
    marginVertical: 12,
  },
  input: {
    borderRadius: 8,
    height: 40,
    padding: 10,
    flex: 1,
  },
  icon: {
    marginLeft: 12,
  },
})

export default GamesSearch
