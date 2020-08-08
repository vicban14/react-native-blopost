import React, { useReducer } from 'react'

const BlogContext = React.createContext()

function blogReducer(state, action) {
  if (action.type === 'add_blogPost') {
    return [...state, { title: `Blog Post #${state.length + 1}` }]
  }
  return state
}

export function BlogProvider({ children }) {
  const [state, dispatch] = useReducer(blogReducer, [])

  function addBlogPost() {
    dispatch({ type: 'add_blogPost' })
  }

  return (
    <BlogContext.Provider value={{ data: state, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext
