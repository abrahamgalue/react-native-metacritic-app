import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const icon = require('./assets/icon.png')

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Pressable
        onPress={() => {
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({ pressed }) => (
          <Text style={{ ...styles.text, fontSize: pressed ? 36 : 24 }}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: "#fff"
  }
});
