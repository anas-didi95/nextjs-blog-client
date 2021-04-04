import React from "react"
import { TPost } from "../utils/types"
import Date from "./Date"

const PostList: React.FC<{ posts: TPost[] }> = ({ posts }) => (
  <>
    {posts.map(post => (
      <div key={post.id} className="mb-6">
        <p className="mb-1">
          <span className="has-text-weight-bold">
            <Date dateString={post.date} /></span>&nbsp;<a className="ml-2 has-text-weight-semibold has-text-info">TYPOGRAPGY</a>
        </p>
        <a className="title">{post.title}</a>
        <p className="mt-4 mb-3">
          {/*An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.*/}</p>
        <a>Read</a>
      </div>

    ))}
  </>
)

export default PostList
