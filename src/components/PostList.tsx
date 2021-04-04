import React from "react"
import { TPost } from "../utils/types"
import Date from "./Date"

const PostList: React.FC<{ posts: TPost[] }> = ({ posts }) => (
  <>
    {posts.map((post) => (
      <div key={post.id} className="mb-6">
        <p className="mb-1">
          <span className="has-text-weight-bold">
            <Date dateString={post.date} />
          </span>
          &nbsp;
          <a className="ml-2 has-text-weight-semibold has-text-info">
            TYPOGRAPGY
          </a>
        </p>
        <a className="title">{post.title}</a>
        <p className="mt-4 mb-3">{post.excerpt}</p>
        <a>Read</a>
      </div>
    ))}
  </>
)

export default PostList
