import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

function blogReducer(state, action) {
  if (action.type === 'add_blogPost') {
    return [
      ...state,
      {
        id: Math.floor(Math.random() * 99999),
        title: action.payload.title,
        content: action.payload.content,
      },
    ]
  } else if (action.type === 'delete_blogPost') {
    return state.filter((blogPost) => blogPost.id !== action.payload)
  } else if (action.type === 'edit_blogPost') {
    return state.map((blogPost) => {
      return blogPost.id === action.payload.id ? action.payload : blogPost
    })
  } else if (action.type === 'get_blogposts') {
    return action.payload
  }
  return state
}

function getBlogPosts(dispatch) {
  return async () => {
    const response = await jsonServer.get('/blogpost')
    dispatch({ type: 'get_blogposts', payload: response.data })
  }
}

function addBlogPost(dispatch) {
  return async (title, content, callbackNavigation) => {
    await jsonServer.post('/blogPost', { title, content })
    //dispatch({ type: 'add_blogPost', payload: { title, content } })
    callbackNavigation()
  }
}

function deleteBlogPost(dispatch) {
  return (id) => {
    dispatch({ type: 'delete_blogPost', payload: id })
  }
}

function editBlogPost(dispatch) {
  return (title, content, id, callbackNavigation) => {
    dispatch({ type: 'edit_blogPost', payload: { title, content, id } })
    callbackNavigation()
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
)
