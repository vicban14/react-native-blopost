import createDataContext from './createDataContext'

function blogReducer(state, action) {
  if (action.type === 'add_blogPost') {
    return [...state, { title: `Blog Post #${state.length + 1}` }]
  }
  return state
}

function addBlogPost(dispatch) {
  return () => {
    dispatch({ type: 'add_blogPost' })
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
)
