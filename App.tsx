import React from 'react';
import {Button, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 40,
        }}>
        Hello World!
      </Text>
      <Button title="Tap me!"></Button>
    </View>
  );
}

export default App;
