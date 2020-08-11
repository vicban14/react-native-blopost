import createDataContext from './createDataContext'

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
  }
  return state
}

function addBlogPost(dispatch) {
  return (title, content, callbackNavigation) => {
    dispatch({ type: 'add_blogPost', payload: { title, content } })
    callbackNavigation()
  }
}

function deleteBlogPost(dispatch) {
  return (id) => {
    dispatch({ type: 'delete_blogPost', payload: id })
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
)
