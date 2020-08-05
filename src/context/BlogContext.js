import React from 'react'

const BlogContext = React.createContext()

export function BlogProvider({ children }) {
  return <BlogContext.Provider>{children}</BlogContext.Provider>
}
