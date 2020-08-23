import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

function IndexScreen({ navigation }) {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context)

  useEffect(() => {
    getBlogPosts()

    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts()
    })

    return () => {
      listener.remove()
    }
  }, [])

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.text}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name='trash' style={styles.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name='plus-circle' size={20} style={styles.plusIcon} />
      </TouchableOpacity>
    ),
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
  text: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
  plusIcon: {
    marginRight: 10,
  },
})

export default IndexScreen
