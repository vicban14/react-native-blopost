import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Context } from '../context/BlogContext'

function CreateScreen({ navigation }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const { addBlogPost } = useContext(Context)

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
      <Button
        title='Add Post Blog'
        onPress={() => {
          {
            addBlogPost(title, content, () => navigation.navigate('Index'))
          }
        }}
      />
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
