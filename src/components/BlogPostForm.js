import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title)
  const [content, setContent] = useState(initialValues.content)

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter title:</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.input}
      />
      <Text style={styles.label}>Enter content:</Text>
      <TextInput
        value={content}
        onChangeText={(text) => setContent(text)}
        style={styles.input}
      />
      <Button title='Save Blog Post' onPress={() => onSubmit(title, content)} />
    </View>
  )
}

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
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
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
})

export default BlogPostForm
