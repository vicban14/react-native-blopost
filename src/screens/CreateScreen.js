import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

function CreateScreen() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter title:</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.input}
      />
      <Text style={styles.text}>Enter content:</Text>
      <TextInput
        value={content}
        onChangeText={(text) => setContent(text)}
        style={styles.input}
      />
      <Button title='Add Post Blog' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    fontSize: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
})

export default CreateScreen
