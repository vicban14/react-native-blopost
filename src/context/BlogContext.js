import createDataContext from './createDataContext'

function blogReducer(state, action) {
  if (action.type === 'add_blogPost') {
    return [
      ...state,
      {
        id: Math.floor(Math.random() * 99999),
        title: `Blog Post #${state.length + 1}`,
      },
    ]
  } else if (action.type === 'delete_blogPost') {
    return state.filter((blogPost) => blogPost.id !== action.payload)
  }
  return state
}

function addBlogPost(dispatch) {
  return () => {
    dispatch({ type: 'add_blogPost' })
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
